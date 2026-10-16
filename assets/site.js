(function () {
  var S = window.SITE || {};
  var OPS = (window.OPORTUNIDADES || []).slice().sort(function (a, b) { return a.data < b.data ? 1 : -1; });

  var placeholders = {
    nome: "[Nome da Empresa]",
    crea: "[CREA nº]",
    whatsapp: "[seu WhatsApp]",
    email: "[seu e-mail]",
    linkedin: "[seu LinkedIn]"
  };
  function val(key) { return S[key] ? S[key] : (placeholders[key] || ""); }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtWhats(n) {
    var d = String(n).replace(/\D/g, "");
    var m = d.match(/^55(\d{2})(\d{4,5})(\d{4})$/);
    return m ? "(" + m[1] + ") " + m[2] + "-" + m[3] : n;
  }
  function fmtDate(iso) {
    var p = String(iso).split("-");
    var meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    return p.length === 3 ? p[2] + " " + meses[+p[1] - 1] + " " + p[0] : iso;
  }

  // Preenche textos e links com os dados de config.js
  document.querySelectorAll("[data-site]").forEach(function (el) {
    var key = el.getAttribute("data-site");
    var text = key === "whatsapp" && S.whatsapp ? fmtWhats(S.whatsapp) : val(key);
    if (key === "linkedin" && S.linkedin) text = S.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    el.textContent = text;
  });
  document.querySelectorAll("[data-href]").forEach(function (el) {
    var key = el.getAttribute("data-href");
    if (!S[key]) { el.removeAttribute("href"); return; }
    var map = {
      whatsapp: "https://wa.me/" + String(S.whatsapp).replace(/\D/g, ""),
      email: "mailto:" + S.email,
      linkedin: S.linkedin
    };
    el.setAttribute("href", map[key]);
  });
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  if (S.nome) document.title = document.title.replace("[Nome da Empresa]", S.nome);

  // Botões de copiar
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var key = btn.getAttribute("data-copy");
      var text = key === "whatsapp" && S.whatsapp ? fmtWhats(S.whatsapp) : val(key);
      function done(ok) { btn.textContent = ok ? "Copiado" : "Selecione"; setTimeout(function () { btn.textContent = "Copiar"; }, 1600); }
      try {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } catch (e) { done(false); }
    });
  });

  // Markdown simples: parágrafos, ## subtítulos, listas com "-", **negrito**
  function md(src) {
    var inline = function (s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); };
    return String(src).trim().split(/\n\s*\n/).map(function (block) {
      var lines = block.split("\n");
      if (/^##\s/.test(lines[0])) {
        var head = "<h2>" + inline(lines[0].replace(/^##\s+/, "")) + "</h2>";
        return lines.length > 1 ? head + md(lines.slice(1).join("\n")) : head;
      }
      if (lines.every(function (l) { return /^\s*-\s/.test(l); })) {
        return "<ul>" + lines.map(function (l) { return "<li>" + inline(l.replace(/^\s*-\s+/, "")) + "</li>"; }).join("") + "</ul>";
      }
      return "<p>" + inline(lines.join(" ")) + "</p>";
    }).join("");
  }

  function row(o, href) {
    return '<a class="post-row" href="' + href + '">' +
      '<time datetime="' + esc(o.data) + '">' + fmtDate(o.data) + "</time>" +
      '<div class="main"><h3>' + esc(o.titulo) + "</h3><p>" + esc(o.resumo) + "</p>" +
      '<div class="meta"><span>' + esc(o.setor) + "</span><span>" + esc(o.local) + "</span><span>" + esc(o.tipo) + "</span>" +
      (o.exemplo ? '<span class="tag-exemplo">exemplo</span>' : "") + "</div></div>" +
      '<span class="status" data-s="' + esc(o.status) + '">' + esc(o.status) + "</span></a>";
  }

  // Home: últimas 3 oportunidades
  var latest = document.getElementById("latest");
  if (latest) {
    latest.innerHTML = OPS.length
      ? OPS.slice(0, 3).map(function (o) { return row(o, "blog.html#" + o.id); }).join("")
      : '<p class="empty">Nenhuma oportunidade publicada ainda.</p>';
  }

  // Blog: lista com filtros + leitura do post pelo #id
  var list = document.getElementById("list");
  var article = document.getElementById("article");
  if (list && article) {
    var filtersEl = document.getElementById("filters");
    var current = "Todas";
    var setores = ["Todas"].concat(OPS.map(function (o) { return o.setor; }).filter(function (s, i, a) { return a.indexOf(s) === i; }));

    function renderFilters() {
      filtersEl.innerHTML = '<span class="label">Setor</span>' + setores.map(function (s) {
        return '<button type="button" class="filter" aria-pressed="' + (s === current) + '">' + esc(s) + "</button>";
      }).join("");
      filtersEl.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () { current = b.textContent; renderFilters(); renderList(); });
      });
    }
    function renderList() {
      var items = OPS.filter(function (o) { return current === "Todas" || o.setor === current; });
      list.innerHTML = items.length
        ? items.map(function (o) { return row(o, "#" + o.id); }).join("")
        : '<p class="empty">Nenhuma oportunidade neste setor.</p>';
    }
    function renderArticle(o) {
      article.innerHTML =
        '<a class="back" href="#">← Todas as oportunidades</a>' +
        '<div class="meta"><time datetime="' + esc(o.data) + '">' + fmtDate(o.data) + "</time>" + (o.exemplo ? '<span class="tag-exemplo">exemplo</span>' : "") + "</div>" +
        "<h1>" + esc(o.titulo) + "</h1>" +
        '<div class="spec">' +
          '<div><span class="label">Setor</span><b>' + esc(o.setor) + "</b></div>" +
          '<div><span class="label">Local</span><b>' + esc(o.local) + "</b></div>" +
          '<div><span class="label">Tipo</span><b>' + esc(o.tipo) + "</b></div>" +
          '<div><span class="label">Status</span><b><span class="status" data-s="' + esc(o.status) + '">' + esc(o.status) + "</span></b></div>" +
          '<div><span class="label">Oferta indicada</span><b>' + esc(o.oferta || "—") + "</b></div>" +
          '<div><span class="label">Registro</span><b class="mono">OP-' + esc(o.data.replace(/-/g, "")) + "</b></div>" +
        "</div>" +
        '<div class="prose">' + md(o.corpo) + "</div>" +
        '<div class="article-cta"><span>Tem um projeto parecido? Vamos conversar 30 minutos, sem custo.</span>' +
        '<a class="btn btn-primary" href="index.html#contato">Falar com o engenheiro</a></div>';
    }
    function route() {
      var id = decodeURIComponent(location.hash.slice(1));
      var o = OPS.filter(function (x) { return x.id === id; })[0];
      var listView = document.getElementById("list-view");
      if (o) {
        listView.hidden = true; article.hidden = false; renderArticle(o);
        document.title = o.titulo + " · " + val("nome");
        window.scrollTo(0, 0);
      } else {
        listView.hidden = false; article.hidden = true;
        document.title = "Oportunidades · " + val("nome");
      }
    }
    renderFilters(); renderList(); route();
    window.addEventListener("hashchange", route);
  }
})();
