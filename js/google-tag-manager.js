window.onload = () => {
  var script = document.createElement("script");
  var t =
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PJ983WS');";
  script.appendChild(t);
  document.head.appendChild(script);

  var noscript = document.createElement("noscript");
  var t2 =
    "<noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-PJ983WS' height='0' width='0' style='display:none;visibility:hidden'><iframe><noscript>";
  noscript.appendChild(t2);
  document.body.appendChild(noscript);
};
