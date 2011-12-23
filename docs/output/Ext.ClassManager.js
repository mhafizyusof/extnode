Ext.data.JsonP.Ext_ClassManager({"tagname":"class","name":"Ext.ClassManager","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"code_type":"nop","private":false,"inheritable":false,"inheritdoc":null,"meta":{"author":["Jacky Nguyen <jacky@sencha.com>"],"docauthor":["Jacky Nguyen <jacky@sencha.com>"]},"id":"class-Ext.ClassManager","members":{"cfg":[],"property":[],"method":[{"name":"create","tagname":"method","owner":"Ext.ClassManager","meta":{"deprecated":{"version":"4.1.0","text":"Use {@link Ext#define} instead, as that also supports creating overrides."}},"id":"method-create"},{"name":"get","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-get"},{"name":"getAliasesByName","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getAliasesByName"},{"name":"getByAlias","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getByAlias"},{"name":"getClass","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getClass"},{"name":"getDisplayName","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getDisplayName"},{"name":"getName","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getName"},{"name":"getNameByAlias","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getNameByAlias"},{"name":"getNameByAlternate","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getNameByAlternate"},{"name":"getNamesByExpression","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-getNamesByExpression"},{"name":"instantiateByAlias","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-instantiateByAlias"},{"name":"isCreated","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-isCreated"},{"name":"set","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-set"},{"name":"setAlias","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-setAlias"},{"name":"setNamespace","tagname":"method","owner":"Ext.ClassManager","meta":{},"id":"method-setNamespace"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"ext-foundation-dev.js","href":"ext-foundation-dev.html#Ext-ClassManager"}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"allMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ext-foundation-dev.html#Ext-ClassManager' target='_blank'>ext-foundation-dev.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a> manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#!/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#!/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n\n<h1>Basic syntax:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>(className, properties);\n</code></pre>\n\n<p>in which <code>properties</code> is an object represent a collection of properties that apply to the class. See\n<a href=\"#!/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">create</a> for more detailed instructions.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n     name: 'Unknown',\n\n     constructor: function(name) {\n         if (name) {\n             this.name = name;\n         }\n\n         return this;\n     },\n\n     eat: function(foodType) {\n         alert(\"I'm eating: \" + foodType);\n\n         return this;\n     }\n});\n\nvar aaron = new Person(\"Aaron\");\naaron.eat(\"Sandwich\"); // alert(\"I'm eating: Sandwich\");\n</code></pre>\n\n<p><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> has a powerful set of extensible pre-processors which takes care of\neverything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.</p>\n\n<h1>Inheritance:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Developer', {\n     extend: 'Person',\n\n     constructor: function(name, isGeek) {\n         this.isGeek = isGeek;\n\n         // Apply a method from the parent class' prototype\n         this.callParent([name]);\n\n         return this;\n\n     },\n\n     code: function(language) {\n         alert(\"I'm coding in: \" + language);\n\n         this.eat(\"Bugs\");\n\n         return this;\n     }\n});\n\nvar jacky = new Developer(\"Jacky\", true);\njacky.code(\"JavaScript\"); // alert(\"I'm coding in: JavaScript\");\n                          // alert(\"I'm eating: Bugs\");\n</code></pre>\n\n<p>See <a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">Ext.Base.callParent</a> for more details on calling superclass' methods</p>\n\n<h1>Mixins:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanPlayGuitar', {\n     playGuitar: function() {\n        alert(\"F#...G...D...A\");\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanComposeSongs', {\n     composeSongs: function() { ... }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canComposeSongs: 'CanComposeSongs',\n         canSing: 'CanSing'\n     }\n})\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('CoolPerson', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canSing: 'CanSing'\n     },\n\n     sing: function() {\n         alert(\"Ahem....\");\n\n         this.mixins.canSing.sing.call(this);\n\n         alert(\"[Playing guitar at the same time...]\");\n\n         this.playGuitar();\n     }\n});\n\nvar me = new CoolPerson(\"Jacky\");\n\nme.sing(); // alert(\"Ahem...\");\n           // alert(\"I'm on the highway to hell...\");\n           // alert(\"[Playing guitar at the same time...]\");\n           // alert(\"F#...G...D...A\");\n</code></pre>\n\n<h1>Config:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n\n     isExpensive: false,\n\n     constructor: function(config) {\n         this.initConfig(config);\n\n         return this;\n     },\n\n     applyPrice: function(price) {\n         this.isExpensive = (price &gt; 500);\n\n         return price;\n     },\n\n     applyOperatingSystem: function(operatingSystem) {\n         if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {\n             return 'Other';\n         }\n\n         return operatingSystem;\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n\niPhone.isExpensive; // false;\niPhone.setPrice(600);\niPhone.getPrice(); // 600\niPhone.isExpensive; // true;\n\niPhone.setOperatingSystem('AlienOS');\niPhone.getOperatingSystem(); // 'Other'\n</code></pre>\n\n<h1>Statics:</h1>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Computer', {\n     statics: {\n         factory: function(brand) {\n            // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n\n<p>Also see <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a> and <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a> for more details on accessing\nstatic properties within class methods</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-create' class='name expandable'>create</a>( <span class='pre'>Object className, Object data, Object createdFn</span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>Defines a class. ...</div><div class='long'><p>Defines a class.</p>\n        <div class='signature-box deprecated'>\n        <p>This member has been <strong>deprecated</strong> since 4.1.0</p>\n        <p>Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead, as that also supports creating overrides.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>createdFn</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-get' class='name expandable'>get</a>( <span class='pre'>String name</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Retrieve a class by its name. ...</div><div class='long'><p>Retrieve a class by its name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getAliasesByName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getAliasesByName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getAliasesByName' class='name expandable'>getAliasesByName</a>( <span class='pre'>String name</span> ) : Array</div><div class='description'><div class='short'>Get the aliases of a class by the class name ...</div><div class='long'><p>Get the aliases of a class by the class name</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>aliases</p>\n</div></li></ul></div></div></div><div id='method-getByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getByAlias' class='name expandable'>getByAlias</a>( <span class='pre'>String alias</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Get a reference to the class by its alias. ...</div><div class='long'><p>Get a reference to the class by its alias.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getClass' class='name expandable'>getClass</a>( <span class='pre'>Object object</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. ...</div><div class='long'><p>Get the class of the provided object; returns null if it's not an instance\nof any class created with <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>. This is usually invoked by the shorthand <a href=\"#!/api/Ext-method-getClass\" rel=\"Ext-method-getClass\" class=\"docClass\">Ext.getClass</a></p>\n\n<pre><code>var component = new Ext.Component();\n\n<a href=\"#!/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a>(component); // returns Ext.Component\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'><p>class</p>\n</div></li></ul></div></div></div><div id='method-getDisplayName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getDisplayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getDisplayName' class='name expandable'>getDisplayName</a>( <span class='pre'>Object object</span> ) : String</div><div class='description'><div class='short'>Returns the displayName property or className or object. ...</div><div class='long'><p>Returns the displayName property or className or object. When all else fails, returns \"Anonymous\".</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getName' class='name expandable'>getName</a>( <span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/Object object</span> ) : String</div><div class='description'><div class='short'>Get the name of the class by its reference or its instance;\nusually invoked by the shorthand Ext.getClassName\n\nExt.Cl...</div><div class='long'><p>Get the name of the class by its reference or its instance;\nusually invoked by the shorthand <a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></p>\n\n<pre><code><a href=\"#!/api/Ext.ClassManager-method-getName\" rel=\"Ext.ClassManager-method-getName\" class=\"docClass\">Ext.ClassManager.getName</a>(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNameByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getNameByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNameByAlias' class='name expandable'>getNameByAlias</a>( <span class='pre'>String alias</span> ) : String</div><div class='description'><div class='short'>Get the name of a class by its alias. ...</div><div class='long'><p>Get the name of a class by its alias.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNameByAlternate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getNameByAlternate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNameByAlternate' class='name expandable'>getNameByAlternate</a>( <span class='pre'>String alternate</span> ) : String</div><div class='description'><div class='short'>Get the name of a class by its alternate name. ...</div><div class='long'><p>Get the name of a class by its alternate name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alternate</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='method-getNamesByExpression' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-getNamesByExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getNamesByExpression' class='name expandable'>getNamesByExpression</a>( <span class='pre'>String expression</span> ) : String[]</div><div class='description'><div class='short'>Converts a string expression to an array of matching class names. ...</div><div class='long'><p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code> // returns ['Ext.window.Window']\nvar window = <a href=\"#!/api/Ext.ClassManager-method-getNamesByExpression\" rel=\"Ext.ClassManager-method-getNamesByExpression\" class=\"docClass\">Ext.ClassManager.getNamesByExpression</a>('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = <a href=\"#!/api/Ext.ClassManager-method-getNamesByExpression\" rel=\"Ext.ClassManager-method-getNamesByExpression\" class=\"docClass\">Ext.ClassManager.getNamesByExpression</a>('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = <a href=\"#!/api/Ext.ClassManager-method-getNamesByExpression\" rel=\"Ext.ClassManager-method-getNamesByExpression\" class=\"docClass\">Ext.ClassManager.getNamesByExpression</a>('Ext.data.*');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>classNames</p>\n</div></li></ul></div></div></div><div id='method-instantiateByAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-instantiateByAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-instantiateByAlias' class='name expandable'>instantiateByAlias</a>( <span class='pre'>String alias, Object... args</span> ) : Object</div><div class='description'><div class='short'>Instantiate a class by its alias; usually invoked by the convenient shorthand Ext.createByAlias\nIf Ext.Loader is enab...</div><div class='long'><p>Instantiate a class by its alias; usually invoked by the convenient shorthand <a href=\"#!/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>\nIf <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#!/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = <a href=\"#!/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a>('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Additional arguments after the alias will be passed to the\nclass constructor.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>instance</p>\n</div></li></ul></div></div></div><div id='method-isCreated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-isCreated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-isCreated' class='name expandable'>isCreated</a>( <span class='pre'>String className</span> ) : Boolean</div><div class='description'><div class='short'>Checks if a class has already been created. ...</div><div class='long'><p>Checks if a class has already been created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>exist</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-set' class='name expandable'>set</a>( <span class='pre'>String name, Object value</span> ) : <a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a></div><div class='description'><div class='short'>Sets a name reference to a class. ...</div><div class='long'><p>Sets a name reference to a class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setAlias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-setAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-setAlias' class='name expandable'>setAlias</a>( <span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/String cls, String alias</span> )</div><div class='description'><div class='short'>Register the alias for a class. ...</div><div class='long'><p>Register the alias for a class.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a>/String<div class='sub-desc'><p>a reference to a class or a className</p>\n</div></li><li><span class='pre'>alias</span> : String<div class='sub-desc'><p>Alias to use when referring to this class</p>\n</div></li></ul></div></div></div><div id='method-setNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ext-foundation-dev.html#Ext-ClassManager-method-setNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-setNamespace' class='name expandable'>setNamespace</a>( <span class='pre'>String name, Object value</span> )</div><div class='description'><div class='short'>Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'...</div><div class='long'><p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code><a href=\"#!/api/Ext.ClassManager-method-setNamespace\" rel=\"Ext.ClassManager-method-setNamespace\" class=\"docClass\">Ext.ClassManager.setNamespace</a>('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});