this["JST"] = this["JST"] || {};

this["JST"]["article_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><a href=\"#\" class=\"article_link_tag\"><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "></img><a/><h2><a href=\"#\" class=\"article_link_tag\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2><h4>By <a href=\"#\" class=\"author_link_tag\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a></h4><h4>"
    + alias4(((helper = (helper = helpers.dateTime || (depth0 != null ? depth0.dateTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dateTime","hash":{},"data":data}) : helper)))
    + "</h4><p>"
    + alias4(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagline","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});

this["JST"]["article_sidebar_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><dl><dt><a href=\"#\" class=\"article_link_tag\"><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "></img><a/></dt><dd><h2><a href=\"#\" class=\"article_link_tag\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2><h4>By <a href=\"#\" class=\"author_link_tag\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a></h4></dd></dl>";
},"useData":true});

this["JST"]["article_thumb_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\" hidden /><a href=\"#\" class=\"category_link_tag\" data-category=\""
    + alias4(((helper = (helper = helpers.indexCategory || (depth0 != null ? depth0.indexCategory : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"indexCategory","hash":{},"data":data}) : helper)))
    + "\"><img src="
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "></img><a/>";
},"useData":true});

this["JST"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<li><a href=\"#\" class=\"tagged_link_tag\"><div></div><div><h4>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</h4></div></a></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.comment_partial,depth0,{"name":"comment_partial","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><h3><a href=\"#\">"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</a></h3><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagline","hash":{},"data":data}) : helper)))
    + "</p><h2>By <a href=\"#\" class=\"author_link_tag\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a> | "
    + alias4(((helper = (helper = helpers.dateTime || (depth0 != null ? depth0.dateTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dateTime","hash":{},"data":data}) : helper)))
    + "</h2></header><figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" /><figcaption>"
    + alias4(((helper = (helper = helpers.image_caption || (depth0 != null ? depth0.image_caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image_caption","hash":{},"data":data}) : helper)))
    + "</figcaption></figure><div class=\"social_media_bar\"><dl><a href=\"https://www.facebook.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_facebook.png\"></dt><dd>Facebook</dd></a></dl><dl><a href=\"https://twitter.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_twitter.png\"></dt><dd>Twitter</dd></a></dl><dl><a href=\"https://www.instagram.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_instagram.png\"></dt><dd>Instagram</dd></a></dl><dl><a href=\"https://plus.google.com/collections/featured\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_google.png\"></dt><dd>Google +</dd></a></dl></div><section id=\"article_body\"><div class=\"col1\"><div id=\"article_content\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div><div id=\"article_authors\"><h2>Author:</h2><h4><a href=\"#\" class=\"author_link_tag\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a> | <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.author_email || (depth0 != null ? depth0.author_email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_email","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author_email || (depth0 != null ? depth0.author_email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_email","hash":{},"data":data}) : helper)))
    + "</a></h4></div><div id=\"article_tags\"><h2>This story tagged under:</h2><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div><div id=\"comments\"><h1>Show Comments</h1><section><div class=\"message_window\"><h2></h2><div></div><div></div></div><form action=\"/comment\" method=\"post\"><textarea rows=\"3\" name=\"comment\" placeholder=\"Add a comment...\"></textarea><input type=\"submit\" value=\"Comment\" /></form><ul class=\"comments_list\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></section></div></div><div class=\"col2\"><div id=\"article_sidebar_links\"><h1>PROTO BLOG</h1><ul></ul></div></div></section>";
},"usePartial":true,"useData":true});

this["JST"]["author"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"author_body\" data-id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\"><div class=\"col1\"><header><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><a href=\"https://twitter.com/\" target=\"_blank\"><img src=\"/images/icons/icon_twitter_follow.png\" /><h3>Follow @faketwitteraccount</h3></a></header><div id=\"author_info\"><p>"
    + alias4(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bio","hash":{},"data":data}) : helper)))
    + "</p><img src=\""
    + alias4(((helper = (helper = helpers.author_image || (depth0 != null ? depth0.author_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_image","hash":{},"data":data}) : helper)))
    + "\" /></div><div id=\"author_email\"><h4>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " | <a href=\"mailto:"
    + alias4(((helper = (helper = helpers.author_email || (depth0 != null ? depth0.author_email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_email","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author_email || (depth0 != null ? depth0.author_email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_email","hash":{},"data":data}) : helper)))
    + "</a></h4></div><div id=\"author_contact\"><div class=\"message_window\"><h2></h2><div></div><div></div></div><h1>Contact "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><form action=\"\" method=\"post\"><label for=\"your_email\">Your Email Address</label><input type=\"email\" id=\"your_email\" name=\"your_email\" placeholder=\"example@example.com\" required /><label for=\"your_message\">Your Message</label><textarea id=\"your_message\" name=\"your_message\" placeholder=\"What would you like to say?\" required></textarea><input type=\"submit\" value=\"Submit\" /></form></div></div><div class=\"col2\"><div id=\"author_email_alerts\"><div class=\"message_window\"><h2></h2><div></div><div></div></div><h1>Author Email Alerts</h1><h2>Be alerted when "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + " publishes a story</h2><form action=\"\" method=\"post\"><input type=\"email\" placeholder=\"Your email...\" required /><input type=\"submit\" value=\"Sign Up\" /></form></div><div id=\"author_recent_stories\"><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'s Recent Stories</h1><ol></ol></div></div></section>";
},"useData":true});

this["JST"]["category"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col1\"><ul></ul></div><div class=\"col2\"><h1>"
    + alias4(((helper = (helper = helpers.categoryType || (depth0 != null ? depth0.categoryType : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"categoryType","hash":{},"data":data}) : helper)))
    + ": <strong>"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</strong></h1><img src=\"/images/articles/energy_tank.jpg\" /></div>";
},"useData":true});

this["JST"]["comment"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"icon","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return "/images/icons/guest.png";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id='"
    + alias4(((helper = (helper = helpers.commentID || (depth0 != null ? depth0.commentID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"commentID","hash":{},"data":data}) : helper)))
    + "' data-user_id='"
    + alias4(((helper = (helper = helpers.user_id || (depth0 != null ? depth0.user_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"user_id","hash":{},"data":data}) : helper)))
    + "'><dl><dt><img src=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" /></dt><dd><h2>"
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + " <strong>on "
    + alias4(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data}) : helper)))
    + "</strong></h2><p>"
    + alias4(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
    + "</p></dd></dl></li>";
},"useData":true});

this["JST"]["error"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"error_message\"><h1>Oops!</h1><h2>Looks Like You Took A Wrong Turn</h2></div>";
},"useData":true});

this["JST"]["featured_article_link"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" hidden /><a href=\"#\" class=\"article_link_tag\"><img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" /></a><div id=\"featured_article_info\"><h2><a href=\"#\" class=\"article_link_tag\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2><h3><a href=\"#\" class=\"article_link_tag\">"
    + alias4(((helper = (helper = helpers.tagline || (depth0 != null ? depth0.tagline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tagline","hash":{},"data":data}) : helper)))
    + "</a></h3><h4>By <a href=\"#\" class=\"author_link_tag\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a></h4></div>";
},"useData":true});

this["JST"]["game"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><h3><a href=\"#\">"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "</a></h3><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias4(((helper = (helper = helpers.release || (depth0 != null ? depth0.release : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"release","hash":{},"data":data}) : helper)))
    + "</p></header><section><div class=\"col1\"><figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.promo || (depth0 != null ? depth0.promo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promo","hash":{},"data":data}) : helper)))
    + "\" /></figure></div><div class=\"col2\"><figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.title_screen || (depth0 != null ? depth0.title_screen : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title_screen","hash":{},"data":data}) : helper)))
    + "\" /></figure><figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.stage_select || (depth0 != null ? depth0.stage_select : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"stage_select","hash":{},"data":data}) : helper)))
    + "\" /></figure></div></section><div class=\"social_media_bar\"><dl><a href=\"https://www.facebook.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_facebook.png\"></dt><dd>Facebook</dd></a></dl><dl><a href=\"https://twitter.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_twitter.png\"></dt><dd>Twitter</dd></a></dl><dl><a href=\"https://www.instagram.com/\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_instagram.png\"></dt><dd>Instagram</dd></a></dl><dl><a href=\"https://plus.google.com/collections/featured\" target=\"_blank\" ><dt><img src=\"../images/icons/icon_google.png\"></dt><dd>Google +</dd></a></dl></div><section id=\"game_article_body\"><div class=\"col1\"><div id=\"article_content\">"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "<figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.cover1 || (depth0 != null ? depth0.cover1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover1","hash":{},"data":data}) : helper)))
    + "\" /><figcaption>"
    + alias4(((helper = (helper = helpers.cover1_caption || (depth0 != null ? depth0.cover1_caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover1_caption","hash":{},"data":data}) : helper)))
    + "</figcaption></figure>"
    + ((stack1 = ((helper = (helper = helpers.boss_weaknessses || (depth0 != null ? depth0.boss_weaknessses : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boss_weaknessses","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div></div><div class=\"col2\"><div><figure class=\"article_image\"><img src=\""
    + alias4(((helper = (helper = helpers.cover2 || (depth0 != null ? depth0.cover2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover2","hash":{},"data":data}) : helper)))
    + "\" /><figcaption>"
    + alias4(((helper = (helper = helpers.cover2_caption || (depth0 != null ? depth0.cover2_caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover2_caption","hash":{},"data":data}) : helper)))
    + "</figcaption></figure></div><div id=\"article_sidebar_links\"><h1>NES Games</h1><ul id=\"sidebar_games\"><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"1\"><img src=\"/images/games/mm1/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"2\"><img src=\"/images/games/mm2/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"3\"><img src=\"/images/games/mm3/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"4\"><img src=\"/images/games/mm4/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"5\"><img src=\"/images/games/mm5/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"6\"><img src=\"/images/games/mm6/title.png\" /></a></li></ul></div></div></section>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id=\"featured\"><div class=\"col1\"></div><!----><div class=\"col2\"></div></section><section id=\"archived_1\"><div class=\"col1\"><div class=\"header_box\"><h2>THE PROTO REPORT</h2></div><div class=\"articles\"><div id=\"latest\"><img src=\"\"></img><h2 id=\"latest_header\">LATEST ON PROTO BLOG</h2><ul></ul></div><!----><div id=\"news\" class=\"article_links\"><ul></ul></div><!----><div id=\"blogs\" class=\"article_links\"><ul></ul></div><!----><div id=\"history\" class=\"article_links\"><ul></ul></div></div></div><!----><div class=\"col2\"><div id=\"most_read\"><h4>MOST READ</h4><img src=\"\"></img><ol></ol></div><div id=\"tipsheets\"><h2>NES TIPSHEETS</h2><div class=\"slideshow\"><div class=\"left_arrow nav_arrow\"><div class=\"arrow_body\"></div><div class=\"arrow_shadow\"></div></div><ul><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"1\"><img src=\"/images/games/mm1/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"2\"><img src=\"/images/games/mm2/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"3\"><img src=\"/images/games/mm3/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"4\"><img src=\"/images/games/mm4/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"5\"><img src=\"/images/games/mm5/title.png\" /></a></li><li><a href=\"#\" class=\"tipsheet_link_tag\" data-id=\"6\"><img src=\"/images/games/mm6/title.png\" /></a></li></ul><div class=\"right_arrow nav_arrow\"><div class=\"arrow_body\"></div><div class=\"arrow_shadow\"></div></div></div></div></div></section><section id=\"email_signup\"><header><h3>PROTO MAN's Weekly Blast</h3><p>The latest scoops and coverage.</p></header><form action=\"\" method=\"post\"><div class=\"message_window\"><h2></h2><div></div><div></div></div><input type=\"email\" placeholder=\"Your email...\" required /><input type=\"submit\" value=\"Sign Up\" /></form></section><section id=\"proto_pics\"><div class=\"col1\"><div id=\"slideshow_wrapper\"><h1>PROTO <strong>SLIDESHOW</strong></h1><div class=\"slideshow\"><div class=\"left_arrow nav_arrow\"><div class=\"arrow_body\"></div><div class=\"arrow_shadow\"></div></div><ul></ul><div class=\"right_arrow nav_arrow\"><div class=\"arrow_body\"></div><div class=\"arrow_shadow\"></div></div></div></div></div><!----><div class=\"col2\"><img src=\"/images/articles/proto_man_comic.png\" /></div></section><section id=\"archived_2\"><div class=\"col1\"><div class=\"header_box\"><h2>DOCTORS' ORDERS</h2></div><div class=\"articles\"><div id=\"light\" class=\"article_links\"><h3>DR. LIGHT</h3><ul></ul></div><!----><div id=\"wily\" class=\"article_links\"><h3>DR. WILY</h3><ul></ul></div><!----><div id=\"cossack\" class=\"article_links\"><h3>DR. COSSACK</h3><ul></ul></div></div><div class=\"thumb_links_wrapper\"><div id=\"2017\" class=\"thumb_links\"><h3>2017</h3><ul></ul></div><!----><div id=\"games\" class=\"thumb_links\"><h3>GAMES</h3><ul></ul></div><!----><div id=\"gallery\" class=\"thumb_links\"><h3>PROTO GALLERY</h3><ul></ul></div></div></div><!----><div class=\"col2\"></div><div id=\"gallery_slide_layer\"><div></div><img src=\"\" /></div></section>";
},"useData":true});

this["JST"]["info"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"col1\"><h1>General Info</h1><ul><li id=\"about_us\"><h2>About Us</h2><p>Proto Blog is a fake blog I made for coding practice. The general look is based on Politico. In the absence of real content I added a bunch of Mega Man stuff as placeholders.</p></li><li id=\"advertising\"><h2>Advertising</h2><h3>Contact us if you want to advertise on this fake website</h3><h4>Ads | <a href=\"mailto:advertising@protoblog.com\">advertising@protoblog.com</a></h4></li><li id=\"jobs\"><h2>Jobs</h2><p>There are currently no open positions</p><h4>Jobs | <a href=\"mailto:jobs@protoblog.com\">jobs@protoblog.com</a></h4></li><li id=\"faq\"><h2>FAQ</h2><dl><dt>What is Proto Blog?</dt><dd>Proto Blog isn't really a real blog.</dd><dt>Why the Mega Man vibe?</dt><dd>Old-school Mega Man is awesome.</dd></dl></li><li id=\"feedback\"><h2>Feedback</h2><p>Contacting us would probably be a waste of your time.</p><h4>Feedback | <a href=\"mailto:feedback@protoblog.com\">feedback@protoblog.com</a></h4></li><li id=\"terms_of_service\"><h2>Terms of Service</h2><p>terms terms terms terms terms...</p></li><li id=\"privacy_policy\"><h2>Privacy Policy</h2><p>Keep it on the DL</p></li></ul></div><div class=\"col2\"><div id=\"general_email_alerts\"><div class=\"message_window\"><h2></h2><div></div><div></div></div><h1>Email Alerts</h1><h2>Sign up for our mailing list</h2><form action=\"\" method=\"post\"><input type=\"email\" placeholder=\"Your email...\" required /><input type=\"submit\" value=\"Sign Up\" /></form></div></div>";
},"useData":true});

this["JST"]["link_title"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-author_id=\""
    + alias4(((helper = (helper = helpers.author_id || (depth0 != null ? depth0.author_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author_id","hash":{},"data":data}) : helper)))
    + "\" hidden /><h2><a href=\"#\" class=\"article_link_tag\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>";
},"useData":true});

this["JST"]["slide"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a href=\"#\" class=\"slide\"><img src=\""
    + alias4(((helper = (helper = helpers.source || (depth0 != null ? depth0.source : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source","hash":{},"data":data}) : helper)))
    + "\" /></a></li>";
},"useData":true});