// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud-tais$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css integrity=sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u crossorigin=anonymous><title>Cadastro</title></head><body><div class=container><h1>Cadastro</h1><br><form action=/alunos method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    " required><input type=text name=nome placeholder=Nome" +
    marko_attr("value", data.nome) +
    " required><input type=email name=email placeholder=Email" +
    marko_attr("value", data.email) +
    " required><br><label>Curso: </label><p><label><input name=curso type=radio value=ads" +
    marko_attr("checked", data.curso == "ads") +
    "><span>ADS</span></label></p><p><label><input name=curso type=radio value=qualidade" +
    marko_attr("checked", data.curso == "qualidade") +
    "><span>Qualidade</span></label></p><p><label><input name=curso type=radio value=ipi" +
    marko_attr("checked", data.curso == "ipi") +
    "><span>Informatica para Internet</span></label></p><a href=/  style=\"margin-left: 10pt\" class=\"waves-effect waves-light btn red\">Cancelar</a><button style=\"margin-left: 10pt;\" class=\"waves-effect waves-light btn green\" type=submit>Salvar</button></form></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud-tais$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
