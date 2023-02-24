// Unobtrusive Ajax support library for jQuery
// Copyright (C) Microsoft Corporation. All rights reserved.
// @version v3.2.5
// 
// Microsoft grants you the right to use these script files for the sole
// purpose of either: (i) interacting through your browser with the Microsoft
// website or online service, subject to the applicable licensing or use
// terms; or (ii) using the files as included with a Microsoft product subject
// to that product's license terms. Microsoft reserves all other rights to the
// files not expressly granted by Microsoft, whether by implication, estoppel
// or otherwise. Insofar as a script file is dual licensed under GPL,
// Microsoft neither took the code under GPL nor distributes it thereunder but
// under the terms set out in this paragraph. All notices and licenses
// below are for informational purposes only.
!function (t) { function a(t, a) { for (var e = window, r = (t || "").split(".") ; e && r.length;) e = e[r.shift()]; return "function" == typeof e ? e : (a.push(t), Function.constructor.apply(null, a)) } function e(t) { return "GET" === t || "POST" === t } function r(t, a) { e(a) || t.setRequestHeader("X-HTTP-Method-Override", a) } function n(a, e, r) { var n; r.indexOf("application/x-javascript") === -1 && (n = (a.getAttribute("data-ajax-mode") || "").toUpperCase(), t(a.getAttribute("data-ajax-update")).each(function (a, r) { switch (n) { case "BEFORE": t(r).prepend(e); break; case "AFTER": t(r).append(e); break; case "REPLACE-WITH": t(r).replaceWith(e); break; default: t(r).html(e) } })) } function u(u, i) { var o, d, c, s; o = u.getAttribute("data-ajax-confirm"), o && !window.confirm(o) || (d = t(u.getAttribute("data-ajax-loading")), s = parseInt(u.getAttribute("data-ajax-loading-duration"), 10) || 0, t.extend(i, { type: u.getAttribute("data-ajax-method") || void 0, url: u.getAttribute("data-ajax-url") || void 0, cache: "true" === (u.getAttribute("data-ajax-cache") || "").toLowerCase(), beforeSend: function (t) { var e; return r(t, c), e = a(u.getAttribute("data-ajax-begin"), ["xhr"]).apply(u, arguments), e !== !1 && d.show(s), e }, complete: function () { d.hide(s), a(u.getAttribute("data-ajax-complete"), ["xhr", "status"]).apply(u, arguments) }, success: function (t, e, r) { n(u, t, r.getResponseHeader("Content-Type") || "text/html"), a(u.getAttribute("data-ajax-success"), ["data", "status", "xhr"]).apply(u, arguments) }, error: function () { a(u.getAttribute("data-ajax-failure"), ["xhr", "status", "error"]).apply(u, arguments) } }), i.data.push({ name: "X-Requested-With", value: "XMLHttpRequest" }), c = i.type.toUpperCase(), e(c) || (i.type = "POST", i.data.push({ name: "X-HTTP-Method-Override", value: c })), t.ajax(i)) } function i(a) { var e = t(a).data(c); return !e || !e.validate || e.validate() } var o = "unobtrusiveAjaxClick", d = "unobtrusiveAjaxClickTarget", c = "unobtrusiveValidation"; t(document).on("click", "a[data-ajax=true]", function (t) { t.preventDefault(), u(this, { url: this.href, type: "GET", data: [] }) }), t(document).on("click", "form[data-ajax=true] input[type=image]", function (a) { var e = a.target.name, r = t(a.target), n = t(r.parents("form")[0]), u = r.offset(); n.data(o, [{ name: e + ".x", value: Math.round(a.pageX - u.left) }, { name: e + ".y", value: Math.round(a.pageY - u.top) }]), setTimeout(function () { n.removeData(o) }, 0) }), t(document).on("click", "form[data-ajax=true] :submit", function (a) { var e = a.currentTarget.name, r = t(a.target), n = t(r.parents("form")[0]); n.data(o, e ? [{ name: e, value: a.currentTarget.value }] : []), n.data(d, r), setTimeout(function () { n.removeData(o), n.removeData(d) }, 0) }), t(document).on("submit", "form[data-ajax=true]", function (a) { var e = t(this).data(o) || [], r = t(this).data(d), n = r && (r.hasClass("cancel") || void 0 !== r.attr("formnovalidate")); a.preventDefault(), (n || i(this)) && u(this, { url: this.action, type: this.method || "GET", data: e.concat(t(this).serializeArray()) }) }) }(jQuery);
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/* NUGET: BEGIN LICENSE TEXT
 *
 * Microsoft grants you the right to use these script files for the sole
 * purpose of either: (i) interacting through your browser with the Microsoft
 * website or online service, subject to the applicable licensing or use
 * terms; or (ii) using the files as included with a Microsoft product subject
 * to that product's license terms. Microsoft reserves all other rights to the
 * files not expressly granted by Microsoft, whether by implication, estoppel
 * or otherwise. Insofar as a script file is dual licensed under GPL,
 * Microsoft neither took the code under GPL nor distributes it thereunder but
 * under the terms set out in this paragraph. All notices and licenses
 * below are for informational purposes only.
 *
 * NUGET: END LICENSE TEXT */
/*!
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function ($) {
	var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

	function setValidationValues(options, ruleName, value) {
		options.rules[ruleName] = value;
		if (options.message) {
			options.messages[ruleName] = options.message;
		}
	}

	function splitAndTrim(value) {
		return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
	}

	function escapeAttributeValue(value) {
		// As mentioned on http://api.jquery.com/category/selectors/
		return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
	}

	function getModelPrefix(fieldName) {
		return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
	}

	function appendModelPrefix(value, prefix) {
		if (value.indexOf("*.") === 0) {
			value = value.replace("*.", prefix);
		}
		return value;
	}

	function onError(error, inputElement) {  // 'this' is the form element
		var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

		container.removeClass("field-validation-valid").addClass("field-validation-error");
		error.data("unobtrusiveContainer", container);

		if (replace) {
			container.empty();
			error.removeClass("input-validation-error").appendTo(container);
		}
		else {
			error.hide();
		}
	}

	function onErrors(event, validator) {  // 'this' is the form element
		var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

		if (list && list.length && validator.errorList.length) {
			list.empty();
			container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

			$.each(validator.errorList, function () {
				$("<li />").html(this.message).appendTo(list);
			});
		}
	}

	function onSuccess(error) {  // 'this' is the form element
		var container = error.data("unobtrusiveContainer"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

		if (container) {
			container.addClass("field-validation-valid").removeClass("field-validation-error");
			error.removeData("unobtrusiveContainer");

			if (replace) {
				container.empty();
			}
		}
	}

	function onReset(event) {  // 'this' is the form element
		var $form = $(this);
		$form.data("validator").resetForm();
		$form.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
		$form.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")  // If we were using valmsg-replace, get the underlying error
                .removeData("unobtrusiveContainer");
	}

	function validationInfo(form) {
		var $form = $(form),
            result = $form.data(data_validation),
            onResetProxy = $.proxy(onReset, form);

		if (!result) {
			result = {
				options: {  // options structure passed to jQuery Validate's validate() method
					errorClass: "input-validation-error",
					errorElement: "span",
					errorPlacement: $.proxy(onError, form),
					invalidHandler: $.proxy(onErrors, form),
					messages: {},
					rules: {},
					success: $.proxy(onSuccess, form)
				},
				attachValidation: function () {
					$form
                        .off("reset." + data_validation, onResetProxy)
                        .on("reset." + data_validation, onResetProxy)
                        .validate(this.options);
				},
				validate: function () {  // a validation function that is called by unobtrusive Ajax
					$form.validate();
					return $form.valid();
				}
			};
			$form.data(data_validation, result);
		}

		return result;
	}

	$jQval.unobtrusive = {
		adapters: [],

		parseElement: function (element, skipAttach) {
			/// <summary>
			/// Parses a single HTML element for unobtrusive validation attributes.
			/// </summary>
			/// <param name="element" domElement="true">The HTML element to be parsed.</param>
			/// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
			/// validation to the form. If parsing just this single element, you should specify true.
			/// If parsing several elements, you should specify false, and manually attach the validation
			/// to the form when you are finished. The default is false.</param>
			var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

			if (!form) {  // Cannot do client-side validation without a form
				return;
			}

			valInfo = validationInfo(form);
			valInfo.options.rules[element.name] = rules = {};
			valInfo.options.messages[element.name] = messages = {};

			$.each(this.adapters, function () {
				var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

				if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
					prefix += "-";

					$.each(this.params, function () {
						paramValues[this] = $element.attr(prefix + this);
					});

					this.adapt({
						element: element,
						form: form,
						message: message,
						params: paramValues,
						rules: rules,
						messages: messages
					});
				}
			});

			$.extend(rules, { "__dummy__": true });

			if (!skipAttach) {
				valInfo.attachValidation();
			}
		},

		parse: function (selector) {
			/// <summary>
			/// Parses all the HTML elements in the specified selector. It looks for input elements decorated
			/// with the [data-val=true] attribute value and enables validation according to the data-val-*
			/// attribute values.
			/// </summary>
			/// <param name="selector" type="String">Any valid jQuery selector.</param>
			var $forms = $(selector)
                .parents("form")
				.addBack()
                .add($(selector).find("form"))
                .filter("form");

			// :input is a psuedoselector provided by jQuery which selects input and input-like elements
			// combining :input with other selectors significantly decreases performance.
			$(selector).find(":input").filter("[data-val=true]").each(function () {
				$jQval.unobtrusive.parseElement(this, true);
			});

			$forms.each(function () {
				var info = validationInfo(this);
				if (info) {
					info.attachValidation();
				}
			});
		}
	};

	adapters = $jQval.unobtrusive.adapters;

	adapters.add = function (adapterName, params, fn) {
		/// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
		/// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
		/// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
		/// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
		/// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
		/// mmmm is the parameter name).</param>
		/// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
		/// attributes into jQuery Validate rules and/or messages.</param>
		/// <returns type="jQuery.validator.unobtrusive.adapters" />
		if (!fn) {  // Called with no params, just a function
			fn = params;
			params = [];
		}
		this.push({ name: adapterName, params: params, adapt: fn });
		return this;
	};

	adapters.addBool = function (adapterName, ruleName) {
		/// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
		/// the jQuery Validate validation rule has no parameter values.</summary>
		/// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
		/// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
		/// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
		/// of adapterName will be used instead.</param>
		/// <returns type="jQuery.validator.unobtrusive.adapters" />
		return this.add(adapterName, function (options) {
			setValidationValues(options, ruleName || adapterName, true);
		});
	};

	adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
		/// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
		/// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
		/// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
		/// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
		/// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
		/// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
		/// have a minimum value.</param>
		/// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
		/// have a maximum value.</param>
		/// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
		/// have both a minimum and maximum value.</param>
		/// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
		/// contains the minimum value. The default is "min".</param>
		/// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
		/// contains the maximum value. The default is "max".</param>
		/// <returns type="jQuery.validator.unobtrusive.adapters" />
		return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
			var min = options.params.min,
                max = options.params.max;

			if (min && max) {
				setValidationValues(options, minMaxRuleName, [min, max]);
			}
			else if (min) {
				setValidationValues(options, minRuleName, min);
			}
			else if (max) {
				setValidationValues(options, maxRuleName, max);
			}
		});
	};

	adapters.addSingleVal = function (adapterName, attribute, ruleName) {
		/// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
		/// the jQuery Validate validation rule has a single value.</summary>
		/// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
		/// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
		/// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
		/// The default is "val".</param>
		/// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
		/// of adapterName will be used instead.</param>
		/// <returns type="jQuery.validator.unobtrusive.adapters" />
		return this.add(adapterName, [attribute || "val"], function (options) {
			setValidationValues(options, ruleName || adapterName, options.params[attribute]);
		});
	};

	$jQval.addMethod("__dummy__", function (value, element, params) {
		return true;
	});

	$jQval.addMethod("regex", function (value, element, params) {
		var match;
		if (this.optional(element)) {
			return true;
		}

		match = new RegExp(params).exec(value);
		return (match && (match.index === 0) && (match[0].length === value.length));
	});

	$jQval.addMethod("nonalphamin", function (value, element, nonalphamin) {
		var match;
		if (nonalphamin) {
			match = value.match(/\W/g);
			match = match && match.length >= nonalphamin;
		}
		return match;
	});

	if ($jQval.methods.extension) {
		adapters.addSingleVal("accept", "mimtype");
		adapters.addSingleVal("extension", "extension");
	} else {
		// for backward compatibility, when the 'extension' validation method does not exist, such as with versions
		// of JQuery Validation plugin prior to 1.10, we should use the 'accept' method for
		// validating the extension, and ignore mime-type validations as they are not supported.
		adapters.addSingleVal("extension", "extension", "accept");
	}

	adapters.addSingleVal("regex", "pattern");
	adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
	adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
	adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
	adapters.add("equalto", ["other"], function (options) {
		var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

		setValidationValues(options, "equalTo", element);
	});
	adapters.add("required", function (options) {
		// jQuery Validate equates "required" with "mandatory" for checkbox elements
		if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
			setValidationValues(options, "required", true);
		}
	});
	adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
		var value = {
			url: options.params.url,
			type: options.params.type || "GET",
			data: {}
		},
            prefix = getModelPrefix(options.element.name);

		$.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
			var paramName = appendModelPrefix(fieldName, prefix);
			value.data[paramName] = function () {
				return $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']").val();
			};
		});

		setValidationValues(options, "remote", value);
	});
	adapters.add("password", ["min", "nonalphamin", "regex"], function (options) {
		if (options.params.min) {
			setValidationValues(options, "minlength", options.params.min);
		}
		if (options.params.nonalphamin) {
			setValidationValues(options, "nonalphamin", options.params.nonalphamin);
		}
		if (options.params.regex) {
			setValidationValues(options, "regex", options.params.regex);
		}
	});

	$(function () {
		$jQval.unobtrusive.parse(document);
	});
}(jQuery));

// ------------------------------------------------------------------------
// client-side auth for MustBeTrue DataAnnotation
jQuery.validator.addMethod("mustbetrue", function (value, element, param) {
	return element.checked;
});
jQuery.validator.unobtrusive.adapters.addBool("mustbetrue");

// client-side auth for DynamicRange DataAnnotation
jQuery.validator.addMethod('dynamicrange', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var minValue = parseInt($('input[name$="' + namePrefix + params.minvalueproperty + '"]').val(), 10);
	var maxValue = parseInt($('input[name$="' + namePrefix + params.maxvalueproperty + '"]').val(), 10);
	var currentValue = parseFloat(value, 10);
	if (isNaN(minValue) || isNaN(maxValue) || isNaN(currentValue) || minValue > currentValue || currentValue > maxValue) {
		var message = $(element).attr('data-val-dynamicrange');
		$.validator.messages.dynamicrange = $.validator.format(message, minValue, maxValue);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('dynamicrange', ['minvalueproperty', 'maxvalueproperty'],
	function (options) {
		options.rules['dynamicrange'] = options.params;
		if (options.message != null) {
			$.validator.messages.dynamicrange = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for DynamicRegularExpression DataAnnotation
jQuery.validator.addMethod('dynamicregex', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var regexPattern = $('input[name$="' + namePrefix + params.propertyname + '"]').val();
	var regex = new RegExp(regexPattern);

	if (!regex.test(value)) {
		var message = $(element).attr('data-val-dynamicregex');
		$.validator.messages.dynamicregex = $.validator.format(message, regexPattern);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('dynamicregex', ['propertyname'],
	function (options) {
		options.rules['dynamicregex'] = options.params;
		if (options.message != null) {
			$.validator.messages.dynamicregex = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for Modulus DataAnnotation
jQuery.validator.addMethod('modulus', function (value, element, params) {
	var namePrefix = ''
	var elementName = jQuery(element).attr('name')
	if (elementName.indexOf('.') > 0) namePrefix = elementName.substring(0, elementName.lastIndexOf('.') + 1)
	var modulus = $('input[name$="' + namePrefix + params.modulusproperty + '"]').val();
	var value = $('input[name$="' + namePrefix + params.valueproperty + '"]').val();

	if (value % modulus) {
		var message = $(element).attr('data-val-modulus');
		$.validator.messages.modulus = $.validator.format(message, modulus, value);
		return false;
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('modulus', ['modulusproperty', 'valueproperty'],
	function (options) {
		options.rules['modulus'] = options.params;
		if (options.message != null) {
			$.validator.messages.modulus = options.message;
		}
	}
);

$.validator.addMethod("formatteddate",
	function (value, element) {
		return value.match(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/);
	},
	"Please enter a date in the format mm/dd/yyyy"
);

jQuery.validator.unobtrusive.adapters.add('formatteddate',
	function (options) {
		options.rules['formatteddate'] = options.params;
		if (options.message != null) {
			$.validator.messages.formatteddate = options.message;
		}
	}
);


// ------------------------------------------------------------------------
// client-side auth for CompareNumbers DataAnnotation
$.validator.addMethod('comparenumbers', function (value, element, params) {
	var otherFieldValue = $('input[name="' + params.otherpropertyname + '"]').val();
	if (otherFieldValue && value) {
		var currentValue = parseFloat(value);
		var otherValue = parseFloat(otherFieldValue);
		if ($(element).attr('name').toLowerCase().indexOf('min') >= 0) {
			if (params.allowequality) {
				if (currentValue > otherValue) {
					return false;
				}
			} else {
				if (currentValue >= otherValue) {
					return false;
				}
			}
		} else {
			if (params.allowequality) {
				if (currentValue < otherValue) {
					return false;
				};
			} else {
				if (currentValue <= otherValue) {
					return false;
				};
			}
		}
	}
	customValidation.addDependatControlValidaitonHandler(element, params.otherpropertyname);
	return true;
}, '');

$.validator.unobtrusive.adapters.add('comparenumbers', ['otherpropertyname', 'allowequality'],
    function (options) {
    	options.rules['comparenumbers'] = options.params;
    	if (options.message) {
    		options.messages['comparenumbers'] = options.message;
    	}
    }
);

//valid year 1800-2100
$.validator.addMethod("validyear",
	function (value, element) {
		return this.optional(element) || value.match(/^(1[8-9][0-9]\d|20[0-9]\d|2100)$/);
	},
	"Please enter a valid year (1800-2100)"
);

jQuery.validator.unobtrusive.adapters.add('validyear',
	function (options) {
		options.rules['validyear'] = options.params;
		if (options.message != null) {
			$.validator.messages.validyear = options.message;
		}
	}
);

//valid age 18-99
$.validator.addMethod("validage",
	function (value, element) {
		return this.optional(element) || value.match(/^(1[89]|[2-9][0-9])$/);
	},
	"Please enter a valid age (18-99)"
);

jQuery.validator.unobtrusive.adapters.add('validage',
	function (options) {
		options.rules['validage'] = options.params;
		if (options.message != null) {
			$.validator.messages.validyear = options.message;
		}
	}
);

//format phone number
$.validator.addMethod("formattedphone",
	function (value, element) {
		return this.optional(element) || value.match(/^\+?[\d\s-]*\d$/);
	},
	"Digits, spaces, and hyphens allowed. E.g. 415-555-2671, +442071838750"
);

jQuery.validator.unobtrusive.adapters.add('formattedphone',
	function (options) {
		options.rules['formattedphone'] = options.params;
		if (options.message != null) {
			$.validator.messages.formattedphone = options.message;
		}
	}
);

// ------------------------------------------------------------------------
// client-side auth for requiredIf
jQuery.validator.addMethod('requiredif', function (value, element, params) {
	var $conditionElement = $($(element).attr('data-val-requiredif'));
	var isConditionSet = false;

	if ($conditionElement.is(":radio") || $conditionElement.is(":checkbox")) {
		isConditionSet = $conditionElement.is(":checked");
	} else if ($conditionElement.is("select")) {
		isConditionSet = $conditionElement.find("option:selected").length > 0;
	} else {
		isConditionSet = $conditionElement.val() != "";
	}

	if (isConditionSet) {
		if (value.length == 0) {
			var message = "This field is required.";
			$.validator.messages.requiredif = $.validator.format(message);
			return false;
		}
	}
	return true;
}, '');

jQuery.validator.unobtrusive.adapters.add('requiredif',
	function (options) {
		options.rules['requiredif'] = options.params;
		if (options.message != null) {
			$.validator.messages.requiredif = options.message;
		}
	}
);


jQuery.validator.addMethod("notequal", function (value, element, params) {
	var valueToNotEqual = $('input[name$="' + params.notequal + '"]').val();

	return this.optional(element) || value != valueToNotEqual;
}, "Please specify a different value");

jQuery.validator.unobtrusive.adapters.add('notequal', ['notequal'],
	function (options) {
		options.rules['notequal'] = options.params;
		if (options.message != null) {
			$.validator.messages.notequal = options.message;
		}
	}
);