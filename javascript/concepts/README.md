# <a id="main-contents">Javascript Concepts</a>

* [Basic Concepts](#basic)
* [Advanced Concepts](#advanced)
* [Concepts in Images](#images)
* [Javascript Visual Explanations](#visual)

## <a id="basic">Javascript - Basic Concepts</a>
###### <a id="table-of-contents">Table of Contents</a>

These concepts are not ranged by alphabet order because they should be learned exactly in this order.

1. **[Call Stack](#1-call-stack)**
2. **[Primitive Types](#2-primitive-types)**
3. **[Value Types and Reference Types](#3-value-types-and-reference-types)**
4. **[Implicit, Explicit, Nominal, Structuring and Duck Typing](#4-implicit-explicit-nominal-structuring-and-duck-typing)**
5. **[== vs === vs typeof](#5--vs--vs-typeof)**
6. **[Function Scope, Block Scope and Lexical Scope](#6-function-scope-block-scope-and-lexical-scope)**
7. **[Expression vs Statement](#7-expression-vs-statement)**
8. **[IIFE, Modules and Namespaces](#8-iife-modules-and-namespaces)**
9. **[Message Queue and Event Loop](#9-message-queue-and-event-loop)**
10. **[setTimeout, setInterval and requestAnimationFrame](#10-settimeout-setinterval-and-requestanimationframe)**
11. **[JavaScript Engines](#11-javascript-engines)**
12. **[Bitwise Operators, Type Arrays and Array Buffers](#12-bitwise-operators-type-arrays-and-array-buffers)**
13. **[DOM and Layout Trees](#13-dom-and-layout-trees)**
14. **[Factories and Classes](#14-factories-and-classes)**
15. **[this, call, apply and bind](#15-this-call-apply-and-bind)**
16. **[new, Constructor, instanceof and Instances](#16-new-constructor-instanceof-and-instances)**
17. **[Prototype Inheritance and Prototype Chain](#17-prototype-inheritance-and-prototype-chain)**
18. **[Object.create and Object.assign](#18-objectcreate-and-objectassign)**
19. **[map, reduce, filter](#19-map-reduce-filter)**
20. **[Pure Functions, Side Effects, State Mutation and Event Propagation](#20-pure-functions-side-effects-state-mutation-and-event-propagation)**
21. **[Closures](#21-closures)**
22. **[High Order Functions](#22-high-order-functions)**
23. **[Recursion](#23-recursion)**
24. **[Collections and Generators](#24-collections-and-generators)**
25. **[Promises](#25-promises)**
26. **[async/await](#26-asyncawait)**
27. **[Data Structures](#27-data-structures)**
28. **[Expensive Operation and Big O Notation](#28-expensive-operation-and-big-o-notation)**
29. **[Algorithms](#29-algorithms)**
30. **[Inheritance, Polymorphism and Code Reuse](#30-inheritance-polymorphism-and-code-reuse)**
31. **[Design Patterns](#31-design-patterns)**
32. **[Partial Applications, Currying, Compose and Pipe](#32-partial-applications-currying-compose-and-pipe)**
33. **[Clean Code](#33-clean-code)**

---

### 1. Call Stack

### Reference

- 📜 [Call Stack — MDN](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

### Articles

- 📜 [How JavaScript Works Under The Hood: An Overview of JavaScript Engine, Heap and, Call Stack — Bipin Rajbhar](https://dev.to/bipinrajbhar/how-javascript-works-under-the-hood-an-overview-of-javascript-engine-heap-and-call-stack-1j5o)
- 📜 [How JavaScript Works: An Overview of the Engine, the Runtime, and the Call Stack — Alexander Zlatkov](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- 📜 [Javascript: What Is The Execution Context? What Is The Call Stack? — Valentino Gagliardi](https://web.archive.org/web/20180701233338/https://www.valentinog.com/blog/js-execution-context-call-stack/)
- 📜 [Understanding Execution Context and Execution Stack in Javascript — Sukhjinder Arora](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)
- 📜 [Understanding Javascript Call Stack, Event Loops — Gaurav Pandvia](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
- 📜 [Understanding the JavaScript Call Stack — Charles Freeborn](https://medium.freecodecamp.org/understanding-the-javascript-call-stack-861e41ae61d4)
- 📜 [What is the JS Event Loop and Call Stack? — Jess Telford](https://gist.github.com/jesstelford/9a35d20a2aa044df8bf241e00d7bc2d0)

### Videos

- 🎥 [How JavaScript Code is executed? ❤️& Call Stack — Akshay Saini](https://www.youtube.com/watch?v=iLWTnMzWtj4&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)
- 🎥 [Javascript: the Call Stack explained — Coding Blocks India](https://www.youtube.com/watch?v=w6QGEiQceOM)
- 🎥 [La PILA DE EJECUCIÓN (Call Stack) de JavaScript — La Cocina del Código](https://www.youtube.com/watch?v=ygA5U7Wgsg8)
- 🎥 [The Call Stack — Kevin Drumm](https://www.youtube.com/watch?v=Q2sFmqvpBe0)
- 🎥 [The JS Call Stack Explained In 9 Minutes — Colt Steele](https://www.youtube.com/watch?v=W8AeMrVtFLY)
- 🎥 [The Ultimate Guide to Execution Contexts, Hoisting, Scopes, and Closures in JavaScript — Tyler McGinnis](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- 🎥 [Understanding JavaScript Execution — Codesmith](https://www.youtube.com/watch?v=Z6a1cLyq7Ac&list=PLWrQZnG8l0E4kd1T_nyuVoxQUaYEWFgcD)
- 🎥 [What is the Call Stack? — Eric Traub](https://www.youtube.com/watch?v=w7QWQlkLY_s)
- 🎥 [What the heck is the event loop anyway? — Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

**[⬆ Back to Top](#main-contents)**

---

### 2. Primitive Types

### Reference

- 📜 [JavaScript data types and data structures — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values)

### Articles

- 📜 [(Not) Everything in JavaScript is an Object — Daniel Li](https://dev.to/d4nyll/not-everything-in-javascript-is-an-object)
- 📜 [Diving Deeper in JavaScripts Objects — Arfat Salman](https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12)
- 📜 [How numbers are encoded in JavaScript — Dr. Axel Rauschmayer](http://2ality.com/2012/04/number-encoding.html)
- 📜 [JavaScript data types and data structures — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values)
- 📜 [Javascript variables (Beginner thinking)](https://robiul.dev/javascript-variables-beginner-thinking)
- 📜 [Object to primitive conversion — JavaScript.info](https://javascript.info/object-toprimitive)
- 📜 [Primitive Types — Flow](https://flow.org/en/docs/types/primitives/)
- 📜 [Primitive and Non-primitive data-types in JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript)
- 📜 [The Secret Life of JavaScript Primitives — Angus Croll](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- 📜 [The differences between Object.freeze() vs Const in JavaScript — Bolaji Ayodeji](https://medium.com/@bolajiayodeji/the-differences-between-object-freeze-vs-const-in-javascript-4eacea534d7c)
- 📜 [What Every JavaScript Developer Should Know About Floating Point Numbers — Chewxy](https://blog.chewxy.com/2014/02/24/what-every-javascript-developer-should-know-about-floating-point-numbers/)
- 📜 [What You Need to Know About JavaScript Number Type — Max Wizard K](https://indepth.dev/posts/1139/here-is-what-you-need-to-know-about-javascripts-number-type)

### Videos

- 🎥 [Everything you never wanted to know about JavaScript numbers — Bartek Szopka](https://www.youtube.com/watch?v=MqHDDtVYJRI)
- 🎥 [JavaScript Primitive Data Types — Avelx](https://www.youtube.com/watch?v=qw3j0A3DIzQ)
- 🎥 [JavaScript Primitive Types — Simon Sez IT](https://www.youtube.com/watch?v=HsbWQsSCE5Y)
- 🎥 [JavaScript Reference vs Primitive Types — Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- 🎥 [TIPOS DE DATOS PRIMITIVOS en JAVASCRIPT - La Cocina del Código](https://www.youtube.com/watch?v=cC65D2q5f8I)
- 🎥 [Value Types and Reference Types in JavaScript — Programming with Mosh](https://www.youtube.com/watch?v=e-_mDyqm2oU)
- 🎥 [What are variables in Javascript? — JS For Everyone](https://www.youtube.com/watch?v=B4Bbmei_thw)

**[⬆ Back to Top](#main-contents)**

---

### 3. Value Types and Reference Types

### Articles

- 📜 [Back to roots: JavaScript Value vs Reference — Miro Koczka](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)
- 📜 [Explaining Value vs. Reference in Javascript — Arnav Aggarwal](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
- 📜 [Grasp “By Value” and “By Reference” in JavaScript — Léna Faure](https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293)
- 📜 [JavaScript Interview Prep: Primitive vs. Reference Types — Mike Cronin](https://dev.to/mostlyfocusedmike/javascript-interview-prep-primitive-vs-reference-types-3o4f)
- 📜 [JavaScript Primitive vs Reference Values](http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/)
- 📜 [JavaScript Reference and Copy Variables — Vítor Capretz](https://hackernoon.com/javascript-reference-and-copy-variables-b0103074fdf0)
- 📜 [JavaScript by Reference vs. by Value — nrabinowitz](https://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value)
- 📜 [JavaScript map vs. forEach: When to Use Each One - Sajal Soni](https://code.tutsplus.com/tutorials/javascript-map-vs-foreach-when-to-use-each-one--cms-38365)
- 📜 [Primitive Types & Reference Types in JavaScript — Bran van der Meer](https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c)
- 📜 [Value Types, Reference Types and Scope in JavaScript — Ben Aston](https://medium.com/@benastontweet/lesson-1b-javascript-fundamentals-380f601ba851)

### Videos

- 🎥 [JavaScript - Reference vs Primitive Values/ Types - Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
- 🎥 [JavaScript Value vs Reference Types — Programming with Mosh](https://www.youtube.com/watch?v=fD0t_DKREbE)
- 🎥 [Javascript Pass by Value vs Pass by Reference — techsith](https://www.youtube.com/watch?v=E-dAnFdq8k8)
- 🎥 [VALORES vs REFERENCIAS en JAVASCRIPT - La Cocina del Código](https://www.youtube.com/watch?v=AvkyOrWkuQc)

**[⬆ Back to Top](#main-contents)**

---

### 4. Implicit, Explicit, Nominal, Structuring and Duck Typing

### Articles

- 📜 [JavaScript Type Coercion Explained — Alexey Samoshkin](https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839)
- 📜 [Javascript Coercion Explained — Ben Garrison](https://hackernoon.com/javascript-coercion-explained-545c895213d3)
- 📜 [What exactly is Type Coercion in Javascript? - Stack Overflow](https://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript)
- 📜 [What you need to know about Javascript's Implicit Coercion — Promise Tochi](https://dev.to/promhize/what-you-need-to-know-about-javascripts-implicit-coercion-e23)

### Videos

- 🎥 [== ? === ??? ...#@^% - Shirmung Bielefeld](https://www.youtube.com/watch?v=qGyqzN0bjhc&t)
- 🎥 [Coercion in Javascript - Hitesh Choudhary](https://www.youtube.com/watch?v=b04Q_vyqEG8)
- 🎥 [EL SISTEMA de TIPOS DE JAVASCRIPT - La Cocina del Código](https://www.youtube.com/watch?v=0ei4nb49GKo)
- 🎥 [JavaScript Questions: What is Coercion? - Steven Hancock](https://www.youtube.com/watch?v=z4-8wMSPJyI)
- 🎥 [Typing: Static vs Dynamic, Weak vs. Strong - Codexpanse](https://www.youtube.com/watch?v=C5fr0LZLMAs)

### Books

- [You Don't Know JS, 1st Edition: Types & Grammar — Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed)

**[⬆ Back to Top](#main-contents)**

---

### 5. == vs === vs typeof

### Articles

- 📜 [== vs === JavaScript: Double Equals and Coercion — AJ Meyghani](https://www.codementor.io/javascript/tutorial/double-equals-and-coercion-in-javascript)
- 📜 [=== vs == Comparision in JavaScript — FreeCodeCamp](https://www.freecodecamp.org/news/javascript-triple-equals-sign-vs-double-equals-sign-comparison-operators-explained-with-examples/)
- 📜 [Checking Types in Javascript — Toby Ho](http://tobyho.com/2011/01/28/checking-types-in-javascript/)
- 📜 [Checking for the Absence of a Value in JavaScript — Tomer Aberbach](https://tomeraberba.ch/html/post/checking-for-the-absence-of-a-value-in-javascript.html)
- 📜 [Difference between == and === in JavaScript — GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-double-equal-vs-triple-equal-javascript/)
- 📜 [How to better check data types in JavaScript — Webbjocke](https://webbjocke.com/javascript-check-data-types/)
- 📜 [JavaScript Double Equals vs. Triple Equals — Brandon Morelli](https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a)
- 📜 [Should I use === or == equality comparison operator in JavaScript? — Panu Pitkamaki](https://bytearcher.com/articles/equality-comparison-operator-javascript/)
- 📜 [What is the difference between == and === in JavaScript? — Craig Buckler](https://www.oreilly.com/learning/what-is-the-difference-between-and-in-javascript)
- 📜 [Why Use the Triple-Equals Operator in JavaScript? — Louis Lazaris](https://www.impressivewebs.com/why-use-triple-equals-javascipt/)
- 📜 [Why javascript's typeof always return "object"? 

### Videos

- 🎥 [JavaScript "==" VS "===" — Web Dev Simplified](https://www.youtube.com/watch?v=C5ZVC4HHgIg)— Stack Overflow](https://stackoverflow.com/questions/3787901/why-javascripts-typeof-always-return-object)
- 🎥 [JavaScript - The typeof operator — Java Brains](https://www.youtube.com/watch?v=ol_su88I3kw)
- 🎥 [Javascript typeof operator — DevDelight](https://www.youtube.com/watch?v=qPYhTPt_SbQ)

**[⬆ Back to Top](#main-contents)**

---

### 6. Function Scope, Block Scope and Lexical Scope

### Books

- [You Don't Know JS Yet, 2nd Edition: Scope & Closures — Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)

### Articles

- 📜 [A JavaScript Fundamentals Cheat Sheet: Scope, Context, and “this” ― Alexandra Fren](https://dev.to/alexandrafren/a-javascript-fundamentals-cheat-sheet-scope-context-and-this-28ai)
- 📜 [Emulating Block Scope in JavaScript — Josh Clanton](http://adripofjavascript.com/blog/drips/emulating-block-scope-in-javascript.html)
- 📜 [Function Scopes and Block Scopes in JavaScript — Samer Buna](https://edgecoders.com/function-scopes-and-block-scopes-in-javascript-25bbd7f293d7)
- 📜 [Functions / Function scope ― MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope)
- 📜 [Functions in JavaScript - Deepa Pandey](https://www.scaler.com/topics/javascript/javascript-functions/)
- 📜 [JavaScript Functions — Understanding The Basics — Brandon Morelli](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99)
- 📜 [JavaScript Scope and Closures — Zell Liew](https://css-tricks.com/javascript-scope-closures/)
- 📜 [The Difference Between Function and Block Scope in JavaScript — Joseph Cardillo](https://medium.com/@josephcardillo/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)
- 📜 [The battle between Function Scope and Block Scope — Marius Herring](http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)
- 📜 [Understanding Scope and Context in JavaScript — Ryan Morr](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
- 📜 [Understanding Scope in JavaScript — Wissam Abirached](https://developer.telerik.com/topics/web-development/understanding-scope-in-javascript/)
- 📜 [Understanding Scope in JavaScript ― Hammad Ahmed](https://scotch.io/tutorials/understanding-scope-in-javascript)
- 📜 [When to use a function declaration vs. a function expression ― Amber Wilkie](https://medium.freecodecamp.org/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0)

### Videos

- 🎥 [JavaScript Block Scope and Function Scope — mmtuts](https://www.youtube.com/watch?v=aK_nuUAdr8E)
- 🎥 [Javascript Tutorials for Beginners — Mosh Hemadani](https://www.youtube.com/watch?v=W6NZfCO5SIk)
- 🎥 [Variable Scope in JavaScript — Kirupa Chinnathambi](https://www.youtube.com/watch?v=dhp57T3p760)
- 🎥 [Variable Scope — Steve Griffith](https://www.youtube.com/watch?v=FyWdrCZZavQ)
- 🎥 [What Makes Javascript Weird ... and Awesome pt. 4 — LearnCode.academy](https://www.youtube.com/watch?v=SBwoFkRjZvE)
- 🎥 [What the Heck is Lexical Scope? — NWCalvank](https://www.youtube.com/watch?v=GhNA0r10MmA)

**[⬆ Back to Top](#main-contents)**

---

### 7. Expression vs Statement

### Articles

- 📜 [All you need to know about Javascript's Expressions, Statements and Expression Statements — Promise Tochi](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2)
- 📜 [Function Declarations vs. Function Expressions — Anguls Croll](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)
- 📜 [Function Declarations vs. Function Expressions — Mandeep Singh](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052)
- 📜 [Function Expressions vs Function Declarations — Paul Wilkins](https://www.sitepoint.com/function-expressions-vs-declarations/)
- 📜 [JavaScript Function — Declaration vs Expression — Ravi Roshan](https://medium.com/@raviroshan.talk/javascript-function-declaration-vs-expression-f5873b8c7b38)

### Videos

- 🎥 [Expressions vs. Statements in JavaScript — Hexlet](https://www.youtube.com/watch?v=WVyCrI1cHi8)
- 🎥 [The difference between an expression and a statement in JavaScript](https://youtu.be/eWTuFoBYiwg)

**[⬆ Back to Top](#main-contents)**

---

### 8. IIFE, Modules and Namespaces

### Articles

- 📜 [A 10 minute primer to JavaScript modules, module formats, module loaders and module bundlers ― Jurgen Van de Moere](https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/)
- 📜 [An overview of ES6 Modules in JavaScript — Brent Graham](https://blog.cloud66.com/an-overview-of-es6-modules-in-javascript/)
- 📜 [Do ES6 Modules make the case of IIFEs obsolete?](https://hashnode.com/post/do-es6-modules-make-the-case-of-iifes-obsolete-civ96wet80scqgc538un20es0)
- 📜 [ES modules: A cartoon deep-dive — Lin Clark](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- 📜 [ES6 Modules in Depth — Nicolás Bevacqua](https://ponyfoo.com/articles/es6-modules-in-depth)
- 📜 [ES6 modules, Node.js and the Michael Jackson Solution — Alberto Gimeno](https://medium.com/dailyjs/es6-modules-node-js-and-the-michael-jackson-solution-828dc244b8b)
- 📜 [IIFE: Immediately Invoked Function Expressions — Parwinder](https://dev.to/bhagatparwinder/iife-immediately-invoked-function-expressions-49c5)
- 📜 [JavaScript Modules: A Beginner’s Guide — Preethi Kasireddy](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)
- 📜 [Javascript Module Bundlers — Vanshu Hassija](https://sassy-butter-197.notion.site/Javascript-bundlers-016932b17b0744e983c2cc0db31e6f02)
- 📜 [Mastering Immediately-Invoked Function Expressions ― Chandra Gundamaraju](https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6)
- 📜 [Modules ― Exploring JS](http://exploringjs.com/es6/ch_modules.html)
- 📜 [Understanding ES6 Modules — Craig Buckler](https://www.sitepoint.com/understanding-es6-modules/)
- 📜 [Using JavaScript modules on the web — Addy Osmani & Mathias Bynens](https://developers.google.com/web/fundamentals/primers/modules)

### Videos

- 🎥 [ES6 - Modules — Ryan Christiani](https://www.youtube.com/watch?v=aQr2bV1BPyE)
- 🎥 [ES6 Modules in the Real World — Sam Thorogood](https://www.youtube.com/watch?v=fIP4pjAqCtQ)
- 🎥 [ES6 Modules — TempleCoding](https://www.youtube.com/watch?v=5P04OK6KlXA)
- 🎥 [Immediately Invoked Function Expression - Beau teaches JavaScript — freeCodeCamp](https://www.youtube.com/watch?v=3cbiZV4H22c)
- 🎥 [JavaScript IIFE (Immediately Invoked Function Expressions) — Steve Griffith](https://www.youtube.com/watch?v=Xd7zgPFwVX8&)
- 🎥 [JavaScript Modules: ES6 Import and Export — Kyle Robinson](https://www.youtube.com/watch?v=_3oSWwapPKQ)
- 🎥 [Understanding JavaScript IIFE — Sheo Narayan](https://www.youtube.com/watch?v=I5EntfMeIIQ)

**[⬆ Back to Top](#main-contents)**

---

### 9. Message Queue and Event Loop

### Articles

- 📜 [How JavaScript works: Event loop — Alexander Zlatkov](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- 📜 [JavaScript Event Loop Explained — Anoop Raveendran](https://medium.com/front-end-hacking/javascript-event-loop-explained-4cd26af121d4)
- 📜 [JavaScript Visualized: Event Loop — Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- 📜 [Tasks, microtasks, queues and schedules — Jake Archibald](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- 📜 [The JavaScript Event Loop — Flavio Copes](https://flaviocopes.com/javascript-event-loop/)
- 📜 [The JavaScript Event Loop: Explained — Erin Sweson-Healey](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
- 📜 [Understanding JS: The Event Loop — Alexander Kondov](https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40)
- 📜 [Understanding the JavaScript Event Loop — Ashish Gupta](https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop)
- 📜 [Visualising the JavaScript Event Loop with a Pizza Restaurant analogy — Priyansh Jain](https://dev.to/presto412/visualising-the-javascript-event-loop-with-a-pizza-restaurant-analogy-47a8)

### Videos

- 🎥 [Callbacks, Sincrono, Assíncrono e Event Loop (PT-BR)](https://www.youtube.com/watch?v=6lbBaM18X3g)
- 🎥 [Desmitificando el Event Loop (Spanish)](https://www.youtube.com/watch?v=Eqq2Rb7LzYE)
- 🎥 [I'm stuck in an Event Loop — Philip Roberts](https://www.youtube.com/watch?v=6MXRNXXgP_0)
- 🎥 [In The Loop - Jake Archibald | JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- 🎥 [JavaScript Event Loop — ComScience Simplified](https://www.youtube.com/watch?v=XzXIMZMN9k4)
- 🎥 [What the heck is the event loop anyway? | JSConf EU — Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

**[⬆ Back to Top](#main-contents)**

---

### 10. setTimeout, setInterval and requestAnimationFrame

### Articles

- 📜 [Handling time intervals in JavaScript - Amit Merchant](https://www.amitmerchant.com/Handling-Time-Intervals-In-Javascript/)
- 📜 [Javascript setTimeout - All you need to know](https://robiul.dev/javascript-settimeout-all-you-need-to-know)
- 📜 [Understanding JavaScript's requestAnimationFrame() — JavaScript Kit](http://www.javascriptkit.com/javatutors/requestanimationframe.shtml)
- 📜 [Using requestAnimationFrame — Chris Coyier](https://css-tricks.com/using-requestanimationframe/)
- 📜 [Why not to use setInterval — Akanksha Sharma](https://dev.to/akanksha_9560/why-not-to-use-setinterval--2na9)
- 📜 [setTimeout VS setInterval — Develoger](https://develoger.com/settimeout-vs-setinterval-cff85142555b)
- 📜 [setTimeout and setInterval — JavaScript.Info](https://javascript.info/settimeout-setinterval)

### Videos

- 🎥 [JavaScript Timers — Steve Griffith](https://www.youtube.com/watch?v=0VVJSvlUgtg)
- 🎥 [JavaScript setTimeOut and setInterval Explained — Theodore Anderson](https://www.youtube.com/watch?v=mVKfrWCOB60)
- 🎥 [Javascript: How setTimeout and setInterval works — Coding Blocks India](https://www.youtube.com/watch?v=6bPKyl8WYWI)
- 🎥 [setTimeout and setInterval in JavaScript — techsith](https://www.youtube.com/watch?v=TbCgGWe8LN8)

**[⬆ Back to Top](#main-contents)**

---

### 11. JavaScript Engines

### Articles

- 📜 [A Brief History of Google’s V8 Javascript Engine — Clair Smith](https://www.mediacurrent.com/blog/brief-history-googles-v8-javascript-engine/)
- 📜 [How V8 optimizes array operations](https://v8.dev/blog/elements-kinds)
- 📜 [Is javascript compiled or interpreted language?](https://robiul.dev/is-javascript-compiled-or-interpreted-language)
- 📜 [JavaScript Engines — Jen Looper](http://www.softwaremag.com/javascript-engines/)
- 📜 [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
- 📜 [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes)
- 📜 [JavaScript essentials: why you should know how the engine works - Rainer Hahnekamp](https://www.freecodecamp.org/news/javascript-essentials-why-you-should-know-how-the-engine-works-c2cc0d321553)
- 📜 [Understanding How the Chrome V8 Engine Translates JavaScript into Machine Code — DroidHead](https://medium.freecodecamp.org/understanding-the-core-of-nodejs-the-powerful-chrome-v8-engine-79e7eb8af964)
- 📜 [Understanding V8’s Bytecode — Franziska Hinkelmann](https://medium.com/dailyjs/understanding-v8s-bytecode-317d46c94775)

### Videos

- 🎥 [JavaScript Engines: The Good Parts™ — Mathias Bynens & Benedikt Meurer](https://www.youtube.com/watch?v=5nmpokoRaZI)
- 🎥 [JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 | Namaste JavaScript Ep. 16 - Akshay Saini](https://www.youtube.com/watch?v=2WJL19wDH68)
- 🎥 [How JavaScript Code is executed? How Javascript works behind the scenes](https://youtu.be/iLWTnMzWtj4)   
- 🎥 [Understanding the V8 JavaScript Engine - freeCodeCamp Talks](https://www.youtube.com/watch?v=xckH5s3UuX4)

**[⬆ Back to Top](#main-contents)**

---

### 12. Bitwise Operators, Type Arrays and Array Buffers

### Articles

- 📜 [A Comprehensive Primer on Binary Computation and Bitwise Operators in Javascript — Paul Brown](https://medium.com/techtrument/a-comprehensive-primer-on-binary-computation-and-bitwise-operators-in-javascript-81acf8341f04)
- 📜 [Bitwise Operators in Javascript — Joe Cha](https://medium.com/bother7-blog/bitwise-operators-in-javascript-65c4c69be0d3)
- 📜 [How can I understand Bitwise operation in JavaScript?](https://www.quora.com/How-can-I-understand-Bitwise-operation-in-JavaScript)
- 📜 [JavaScript Bitwise Operators — w3resource](https://www.w3resource.com/javascript/operators/bitwise-operator.php)
- 📜 [Programming with JS: Bitwise Operations — Alexander Kondov](https://hackernoon.com/programming-with-js-bitwise-operations-393eb0745dc4)
- 📜 [Using JavaScript’s Bitwise Operators in Real Life — ian m](https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5)

### Videos

- 🎥 [Bitwise Operators and WHY we use them — Alex Hyett](https://www.youtube.com/watch?v=igIjGxF2J-w)
- 🎥 [Deep Dive into Blobs, Files, and ArrayBuffers — Steve Griffith - Prof3ssorSt3v3](https://www.youtube.com/watch?v=ScZZoHj7mqY)
- 🎥 [JS Bitwise Operators and Binary Numbers — Steve Griffith - Prof3ssorSt3v3](https://www.youtube.com/watch?v=RRyxCmLX_ag)
- 🎥 [JavaScript Bitwise Operators — Programming with Mosh](https://www.youtube.com/watch?v=mesu75PTDC8)

**[⬆ Back to Top](#main-contents)**

---

### 13. DOM and Layout Trees

### Books

- 📜 [Eloquent JavaScript, 3rd Edition: Ch. 14 - The Document Object Model](https://eloquentjavascript.net/14_dom.html)

### Articles

- 📜 [DOM Tree](https://javascript.info/dom-nodes)
- 📜 [How To Understand and Modify the DOM in JavaScript — Tania Rascia](https://www.digitalocean.com/community/tutorials/introduction-to-the-dom)
- 📜 [How to traverse the DOM in Javascript — Vojislav Grujić](https://medium.com/javascript-in-plain-english/how-to-traverse-the-dom-in-javascript-d6555c335b4e)
- 📜 [JavaScript DOM Tutorial with Example — Guru99](https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html)
- 📜 [Render Tree Construction — Ilya Grigorik](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
- 📜 [Traversing the DOM with JavaScript — Zell Liew](https://zellwk.com/blog/dom-traversals/)
- 📜 [What exactly is the DOM?](https://bitsofco.de/what-exactly-is-the-dom/)
- 📜 [What is the DOM? — Chris Coyier](https://css-tricks.com/dom/)
- 📜 [What’s the Document Object Model, and why you should know how to use it — Leonardo Maldonado](https://medium.freecodecamp.org/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d)

### Videos

- 🎥 [JavaScript DOM — The Net Ninja](https://www.youtube.com/watch?v=FIORjGvT0kk)
- 🎥 [JavaScript DOM Crash Course — Traversy Media](https://www.youtube.com/watch?v=0ik6X4DJKCc)

**[⬆ Back to Top](#main-contents)**

---

### 14. Factories and Classes

### Articles

- 📜 [An Easy Guide To Understanding Classes In JavaScript](https://dev.to/lawrence_eagles/an-easy-guide-to-understanding-classes-in-javascript-3bcm)
- 📜 [Better JavaScript with ES6, Pt. II: A Deep Dive into Classes ― Peleke Sengstacke](https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes)
- 📜 [Class vs Factory function: exploring the way forward — Cristi Salcescu](https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15)
- 📜 [Factory Functions in JavaScript — Josh Miller](https://atendesigngroup.com/blog/factory-functions-javascript)
- 📜 [How ES6 classes really work and how to build your own — Robert Grosse](https://medium.com/@robertgrosse/how-es6-classes-really-work-and-how-to-build-your-own-fd6085eb326a)
- 📜 [How To Use Classes in JavaScript — Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- 📜 [Javascript Classes — Under The Hood — Majid](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)
- 📜 [The Factory Pattern in JS ES6 — SnstsDev](https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9)
- 📜 [Understand the Factory Design Pattern in Plain JavaScript — Aditya Agarwal](https://medium.com/front-end-hacking/understand-the-factory-design-pattern-in-plain-javascript-20b348c832bd)
- 📜 [Understanding `super` in JavaScript](https://jordankasper.com/understanding-super-in-javascript)

### Videos

- 🎥 [Factory Functions in JavaScript — Fun Fun Function](https://www.youtube.com/watch?v=ImwrezYhw4w)
- 🎥 [JavaScript Factory Functions — Programming with Mosh](https://www.youtube.com/watch?v=jpegXpQpb3o)
- 🎥 [Javascript Tutorial Function Factories — Crypto Chan](https://www.youtube.com/watch?v=R7-IwpH80UE)

**[⬆ Back to Top](#main-contents)**

---

### 15. this, call, apply and bind

### Reference

- 📜 [bind() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- 📜 [apply() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- 📜 [call() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

### Articles

- 📜 [3 Techniques for Maintaining Your Sanity Using "This" in JavaScript — Carl](https://dev.to/canderson93/3-techniques-for-maintaining-your-sanity-using-this-in-javascript-3idf)
- 📜 [A conversation with the 'this' keyword in Javascript — Karen Efereyan](https://dev.to/developerkaren/a-conversation-with-the-this-keyword-in-javascript-3j6g)
- 📜 [A quick intro to 'this' in JavaScript — Natalie Smith](https://dev.to/thatgalnatalie/a-quick-intro-to-this-in-javascript-2mhp)
- 📜 [Explaining JavaScript 'this' to my cat — Andrey K](https://dev.to/cat__logic/explaining-javascript-this-to-my-cat-1kig)
- 📜 [Grokking call(), apply() and bind() methods in JavaScript — Aniket Kudale](https://levelup.gitconnected.com/grokking-call-apply-and-bind-methods-in-javascript-392351a4be8b)
- 📜 [How AND When to use bind, call, and apply in Javascript — Eigen X](https://www.eigenx.com/blog/https/mediumcom/eigen-x/how-and-when-to-use-bind-call-and-apply-in-javascript-77b6f42898fb)
- 📜 [How to understand the keyword this and context in JavaScript — Lukas Gisder-Dubé](https://medium.freecodecamp.org/how-to-understand-the-keyword-this-and-context-in-javascript-cd624c6b74b8)
- 📜 [How-to: call() , apply() and bind() in JavaScript — Niladri Sekhar Dutta](https://www.codementor.io/niladrisekhardutta/how-to-call-apply-and-bind-in-javascript-8i1jca6jp)
- 📜 [JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals — Richard Bovell](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
- 📜 [JavaScript’s apply, call, and bind explained by hosting a cookout — Kevin Kononenko](https://dev.to/kbk0125/javascripts-apply-call-and-bind-explained-by-hosting-a-cookout-32jo)
- 📜 [Javascript: call(), apply() and bind() — Omer Goldberg](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)
- 📜 [Let me explain to you what is `this`. (Javascript) — Jason Yu](https://dev.to/ycmjason/let-me-explain-to-you-what-is-this-javascript-44ja)
- 📜 [Mastering 'this' in JavaScript: Callbacks and bind(), apply(), call() — Michelle Gienow](https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/)
- 📜 [Mastering the JavaScript "this" Keyword — Aakash Srivastav](https://dev.to/aakashsr/mastering-the-javascript-this-keyword-4pfa)
- 📜 [The difference between call / apply / bind — Ivan Sifrim](https://medium.com/@ivansifrim/the-differences-between-call-apply-bind-276724bb825b)
- 📜 [This and Bind In Javascript — Brian Barbour](https://dev.to/steelvoltage/this-and-bind-in-javascript-2pam)
- 📜 [This binding in JavaScript – 4. New binding — Spyros Argalias](https://dev.to/sargalias/this-binding-in-javascript-4-new-binding-2p1n)
- 📜 [Understanding 'this' binding in JavaScript — Yasemin Cidem](https://yasemincidem.medium.com/understanding-this-binding-in-javascript-86687397c76d)
- 📜 [Understanding the “this” Keyword in JavaScript — Pavan](https://medium.com/quick-code/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
- 📜 [What are call(), apply() and bind() in JavaScript — Amitav Mishra](https://jscurious.com/what-are-call-apply-and-bind-in-javascript/)
- 📜 [What the hack is call, apply, bind in JavaScript — Ritik](https://dev.to/ritik_dev_js/what-the-hack-is-call-apply-bind-in-javascript-11ce)
- 📜 [What the heck is this in Javascript? — Hridayesh Sharma](https://dev.to/_hridaysharma/what-the-heck-is-this-in-javascript-37n1)

### Videos

- 🎥 [bind and this - Object Creation in JavaScript - FunFunFunction](https://www.youtube.com/watch?v=GhbhD1HR5vk)
- 🎥 [JavaScript (call, bind, apply) — curious aatma](https://www.youtube.com/watch?v=Uy0NOXLBraE)
- 🎥 [JavaScript call, apply and bind — techsith](https://www.youtube.com/watch?v=c0mLRpw-9rI)
- 🎥 [JS Function Methods call(), apply(), and bind() — Steve Griffith](https://www.youtube.com/watch?v=uBdH0iB1VDM)
- 🎥 [JavaScript Practical Applications of Call, Apply and Bind functions— techsith](https://www.youtube.com/watch?v=AYVYxezrMWA)
- 🎥 [Understanding Functions and 'this' In The World of ES2017 — Bryan Hughes](https://www.youtube.com/watch?v=AOSYY1_np_4)

**[⬆ Back to Top](#main-contents)**

---

### 16. new, Constructor, instanceof and Instances

### Articles

- 📜 [Beyond `typeof` and `instanceof`: simplifying dynamic type checks — Dr. Axel Rauschmayer](http://2ality.com/2017/08/type-right.html)
- 📜 [Constructor, operator "new" — JavaScript.Info](https://javascript.info/constructor-new)
- 📜 [Function and Object, instances of each other — Kiro Risk](https://javascriptrefined.io/function-and-object-instances-of-each-other-1e1095d5faac)
- 📜 [JavaScript For Beginners: the ‘new’ operator — Brandon Morelli](https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e)
- 📜 [Let’s demystify JavaScript’s ‘new’ keyword — Cynthia Lee](https://medium.freecodecamp.org/demystifying-javascripts-new-keyword-874df126184c)
- 📜 [Understanding JavaScript Constructors — Faraz Kelhini](https://css-tricks.com/understanding-javascript-constructors/)
- 📜 [Use Constructor Functions — Openclassrooms](https://openclassrooms.com/en/courses/3523231-learn-to-code-with-javascript/4379006-use-constructor-functions)
- 📜 [What Is the Instanceof Operator in JavaScript — appendTo](https://appendto.com/2016/10/what-is-the-instanceof-operator-in-javascript/)

**[⬆ Back to Top](#main-contents)**

---

### 17. Prototype Inheritance and Prototype Chain

### Reference

- 📜 [Inheritance and the prototype chain — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### Articles

- 📜 [Demystifying ES6 Classes And Prototypal Inheritance ― Neo Ighodaro](https://scotch.io/tutorials/demystifying-es6-classes-and-prototypal-inheritance)
- 📜 [How To Work with Prototypes and Inheritance in JavaScript — Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
- 📜 [Intro To Prototypal Inheritance — Dharani Jayakanthan](https://dev.to/danny/intro-to-prototypal-inheritance---js-9di)
- 📜 [Javascript : Prototype vs Class — Valentin PARSY](https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b)
- 📜 [JavaScript engine fundamentals: optimizing prototypes — Mathias Bynens](https://mathiasbynens.be/notes/prototypes)
- 📜 [JavaScript Prototype — NC Patro](https://codeburst.io/javascript-prototype-cb29d82b8809)
- 📜 [JavaScript’s Prototypal Inheritance Explained Using CSS — Nash Vail](https://medium.freecodecamp.org/understanding-prototypal-inheritance-in-javascript-with-css-93b2fcda75e4)
- 📜 [Let’s Build Prototypal Inheritance in JS — var-che](https://dev.to/varche/let-s-build-prototypal-inheritance-in-js-56mm)
- 📜 [Master JavaScript Prototypes & Inheritance — Arnav Aggarwal](https://codeburst.io/master-javascript-prototypes-inheritance-d0a9a5a75c4e)
- 📜 [Objects, Prototypes and Classes in JavaScript — Atta](https://dev.to/attacomsian/objects-prototypes-and-classes-in-javascript-3i9b)
- 📜 [Objects and Prototypes in JavaScript — Irena Popova](https://dev.to/irenejpopova/objects-and-prototypes-in-javascript-2eie)
- 📜 [Prototypal Inheritance in JavaScript — Jannis Redmann](https://gist.github.com/derhuerst/a585c4916b1c361cc6f0)
- 📜 [Prototypal Inheritance — JavaScript.Info](https://javascript.info/prototype-inheritance)
- 📜 [prototype, **proto** and Prototypal inheritance in JavaScript — Varun Dey](https://dev.to/varundey/prototype-proto-and-prototypal-inheritance-in-javascript-2inl)
- 📜 [Prototype in JavaScript: it’s quirky, but here’s how it works — Pranav Jindal](https://medium.freecodecamp.org/prototype-in-js-busted-5547ec68872)
- 📜 [Prototype in Javascript — Sandeep Ranjan](https://www.codementor.io/sandeepranjan2007/prototype-in-javascipt-knbve0lqo)
- 📜 [Prototypes in JavaScript — Rupesh Mishra](https://hackernoon.com/prototypes-in-javascript-5bba2990e04b)
- 📜 [The magical world of JavaScript prototypes — Belén](https://dev.to/ladybenko/the-magical-world-of-javascript-prototypes-1mhg)
- 📜 [Understanding Classes (ES5) and Prototypal Inheritance in JavaScript — Hridayesh Sharma](https://dev.to/_hridaysharma/understanding-classes-es5-and-prototypal-inheritance-in-javascript-n8d)
- 📜 [Understanding JavaScript: Prototype and Inheritance — Alexander Kondov](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)
- 📜 [Understanding Prototypal Inheritance In JavaScript — Lawrence Eagles](https://dev.to/lawrence_eagles/understanding-prototypal-inheritance-in-javascript-4f31#chp-4)

### Videos

- 🎥 [A Beginner's Guide to Javascript's Prototype — Tyler Mcginnis](https://www.youtube.com/watch?v=XskMWBXNbp0)
- 🎥 [Advanced Javascript - Prototypal Inheritance In 1 Minute](https://www.youtube.com/watch?v=G6l5CHl67HQ)
- 🎥 [An Overview Of Classical Javascript Classes and Prototypal Inheritance — Pentacode](https://www.youtube.com/watch?v=phwzuiJJPpQ)
- 🎥 [JavaScript Prototype Inheritance Explained pt. II — techsith](https://www.youtube.com/watch?v=uIlj6_z_wL8)
- 🎥 [JavaScript Prototype Inheritance Explained pt. I — techsith](https://www.youtube.com/watch?v=7oNWNlMrkpc)
- 🎥 [JavaScript Prototype Inheritance Explained — Kyle Robinson](https://www.youtube.com/watch?v=qMO-LTOrJaE)
- 🎥 [Javascript Prototype Inheritance — Avelx](https://www.youtube.com/watch?v=sOrtAjyk4lQ)
- 🎥 [JavaScript Using Prototypes — O'Reilly](https://www.youtube.com/watch?v=oCwCcNvaXAQ)
- 🎥 [Object Oriented JavaScript - Prototype — The Net Ninja](https://www.youtube.com/watch?v=4jb4AYEyhRc)
- 🎥 [Prototype in JavaScript — kudvenkat](https://www.youtube.com/watch?v=2rkEbcptR64)
- 🎥 [Prototypes in Javascript - p5.js Tutorial — The Coding Train](https://www.youtube.com/watch?v=hS_WqkyUah8)

### Books

- [You Don't Know JS, 1st Edition: this & Object Prototypes — Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed)

**[⬆ Back to Top](#main-contents)**

---

### 18. Object.create and Object.assign

### Reference

- 📜 [Object.assign() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- 📜 [Object.create() — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### Articles

- 📜 [Basic Inheritance with Object.create — Joshua Clanton](http://adripofjavascript.com/blog/drips/basic-inheritance-with-object-create.html)
- 📜 [Copying Objects in JavaScript ― Orinami Olatunji](https://scotch.io/bar-talk/copying-objects-in-javascript)
- 📜 [How to deep clone a JavaScript Object — Flavio Copes](https://flaviocopes.com/how-to-clone-javascript-object/)
- 📜 [JavaScript: Object.assign() — Thiago S. Adriano](https://codeburst.io/javascript-object-assign-bc9696dcbb6e)
- 📜 [JavaScript Object Creation: Patterns and Best Practices — Jeff Mott](https://www.sitepoint.com/javascript-object-creation-patterns-best-practises/)
- 📜 [Object.create(): the New Way to Create Objects in JavaScript — Rob Gravelle](https://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html)
- 📜 [Object.create(): When and Why to Use — VZing](https://dev.to/vzing/object-create-when-and-why-to-use-20m9)
- 📜 [Object.create() In JavaScript — GeeksforGeeks](https://www.geeksforgeeks.org/object-create-javascript/)
- 📜 [Object.create in JavaScript — Rupesh Mishra](https://medium.com/@happymishra66/object-create-in-javascript-fa8674df6ed2)
- 📜 [Understanding the difference between Object.create() and the new operator — Jonathan Voxland](https://medium.com/@jonathanvox01/understanding-the-difference-between-object-create-and-the-new-operator-b2a2f4749358)

### Videos

- 🎥 [Object.assign() explained — Aaron Writes Code](https://www.youtube.com/watch?v=aw7NfYhR5rc)
- 🎥 [Object.assign() Method — techsith](https://www.youtube.com/watch?v=9Ky4X6inpi4)

**[⬆ Back to Top](#main-contents)**

---

### 19. map, reduce, filter

### Articles

- 📜 [(JavaScript )=> Arrow functions — sigu](https://medium.com/podiihq/javascript-arrow-functions-27d4c3334b83)
- 📜 [.map(), .filter(), and .reduce() — Andy Pickle](https://dev.to/pickleat/map-filter-and-reduce-2efb)
- 📜 [Arrow Functions: Fat and Concise Syntax in JavaScript — Kyle Pennell](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)
- 📜 [Difference between map, filter and reduce in JavaScript — Amirata Khodaparast](https://medium.com/@amiratak88/difference-between-map-filter-and-reduce-in-javascript-822ff79d5160)
- 📜 [Finding Your Way With .map() — Brandon Wozniewicz](https://medium.freecodecamp.org/finding-your-way-with-map-aecb8ca038f6)
- 📜 [Functional Programming in JS: map, filter, reduce (Pt. 5) — Omer Goldberg](https://hackernoon.com/functional-programming-in-js-map-filter-reduce-pt-5-308a205fdd5f)
- 📜 [How to Manipulate Arrays in JavaScript — Bolaji Ayodeji](https://www.freecodecamp.org/news/manipulating-arrays-in-javascript/)
- 📜 [How to simplify your codebase with map(), reduce(), and filter() in JavaScript — Alex Permyakov](https://www.freecodecamp.org/news/15-useful-javascript-examples-of-map-reduce-and-filter-74cbbb5e0a1f)
- 📜 [How to Use JavaScript’s .map, .filter, and .reduce — Avery Duffin](https://betterprogramming.pub/how-to-javascripts-map-vs-filter-vs-reduce-80d87a5a0a24)
- 📜 [How to Use Map, Filter, & Reduce in JavaScript — Peleke Sengstacke](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
- 📜 [How to write your own map, filter and reduce functions in JavaScript — Hemand Nair](https://medium.freecodecamp.org/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26)
- 📜 [Javascript.reduce() — Paul Anderson](https://medium.com/@panderson.dev/javascript-reduce-79aab078da23)
- 📜 [JavaScript: Arrow Functions for Beginners — Brandon Morelli](https://codeburst.io/javascript-arrow-functions-for-beginners-926947fc0cdc)
- 📜 [JavaScript: Map, Filter, Reduce — William S. Vincent](https://wsvincent.com/functional-javascript-map-filter-reduce/)
- 📜 [Javascript data structure with map, reduce, filter and ES6 — Deepak Gupta](https://codeburst.io/write-beautiful-javascript-with-%CE%BB-fp-es6-350cd64ab5bf)
- 📜 [JavaScript Functional Programming — map, filter and reduce — Bojan Gvozderac](https://medium.com/jsguru/javascript-functional-programming-map-filter-and-reduce-846ff9ba492d)
- 📜 [JavaScript Map – How to Use the JS .map() Function (Array Method) — FreeCodeCamp](https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/)
- 📜 [Javascript performance test - for vs for each vs (map, reduce, filter, find) — Deepak Gupta](https://towardsdatascience.com/javascript-performance-test-for-vs-for-each-vs-map-reduce-filter-find-32c1113f19d7)
- 📜 [JavaScript — Learn & Understand Arrow Functions — Brandon Morelli](https://codeburst.io/javascript-learn-understand-arrow-functions-fe2083533946)
- 📜 [JavaScript — Learn to Chain Map, Filter, and Reduce — Brandon Morelli](https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4)
- 📜 [JavaScript’s Map, Reduce, and Filter — Dan Martensen](https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter)
- 📜 [JavaScript’s Reduce Method Explained By Going On a Diet — Kevin Kononenko](https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/)
- 📜 [Learn map, filter and reduce in Javascript — João Miguel Cunha](https://medium.com/@joomiguelcunha/learn-map-filter-and-reduce-in-javascript-ea59009593c4)
- 📜 [Map, Filter, Reduce and others Arrays Iterators You Must Know to Become an Algorithms Wizard — Mauro Bono](https://dev.to/uptheirons78/map-filter-reduce-and-others-arrays-iterators-you-must-know-to-become-an-algorithms-wizard-4209)
- 📜 [Map, Filter and Reduce – Animated — JavaScript Teacher](https://medium.com/@js_tut/map-filter-and-reduce-animated-7fe391a35a47)
- 📜 [Map/Filter/Reduce Crash Course — Chris Achard](https://dev.to/chrisachard/map-filter-reduce-crash-course-5gan)
- 📜 [Map⇄Filter⇄Reduce↻ — ashay mandwarya](https://hackernoon.com/map-filter-reduce-ebbed4be4201)
- 📜 [Mastering the JavaScript Reduce method ✂️ — sanderdebr](https://dev.to/sanderdebr/mastering-the-javascript-reduce-method-2foj)
- 📜 [Simplify your JavaScript – Use .map(), .reduce(), and .filter() — Etienne Talbot](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d)
- 📜 [Understanding map, filter and reduce in Javascript — Luuk Gruijs](https://hackernoon.com/understanding-map-filter-and-reduce-in-javascript-5df1c7eee464)
- 📜 [Using .map(), .filter() and .reduce() properly — Sasanka Kudagoda](https://medium.com/javascript-in-plain-english/using-map-filter-and-reduce-properly-50e07f80c8b2)
- 📜 [When (and why) you should use ES6 arrow functions — and when you shouldn’t — Cynthia Lee](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
- 📜 [Why you should replace forEach with map and filter in JavaScript — Roope Hakulinen](https://gofore.com/en/why-you-should-replace-foreach/)

### Videos

- 🎥 [Arrow functions in JavaScript - What, Why and How — Fun Fun Function](https://www.youtube.com/watch?v=6sQDTgOqh-I)
- 🎥 [Different array methods in 1 minute | Midudev (Spanish)](https://youtu.be/Ah7-PPjQ5Ls)
- 🎥 [Functional JavaScript: Map, forEach, Reduce, Filter — Theodore Anderson](https://www.youtube.com/watch?v=vytzLlY_wmU)
- 🎥 [JavaScript Array superpowers: Map, Filter, Reduce (part 2) — Michael Rosata](https://www.youtube.com/watch?v=gIm9xLYudL0)
- 🎥 [JavaScript Array superpowers: Map, Filter, Reduce (part I) — Michael Rosata](https://www.youtube.com/watch?v=qTeeVd8hOFY)
- 🎥 [JavaScript Higher Order Functions - Filter, Map, Sort & Reduce — Epicop](https://www.youtube.com/watch?v=zYBeEPxNSbw)
- 🎥 [Learning Functional Programming with JavaScript — Anjana Vakil - JSUnconf](https://www.youtube.com/watch?v=e-5obm1G_FY&t=1521s)
- 🎥 [Map, Filter and Reduce — Lydia Hallie](https://www.youtube.com/watch?v=UXiYii0Y7Nw)
- 🎥 [Map - Parte 2 JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&t=17s)
- 🎥 [map Array Method | JavaScript Tutorial - Florin Pop](https://www.youtube.com/watch?v=P4RAFdZDn3M)
- 🎥 [Reduce Advanced - Part 4 of FP in JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=1DMolJ2FrNY&t=621s)
- 🎥 [reduce Array Method | JavaScript Tutorial - Florin Pop](https://www.youtube.com/watch?v=IXp06KekEjM)
- 🎥 [Reduce basics - Part 3 of FP in JavaScript - Fun Fun Function](https://www.youtube.com/watch?v=Wl98eZpkp-c)
- 🎥 [[Array Methods 2/3] .filter + .map + .reduce — CodeWithNick](https://www.youtube.com/watch?v=4qWlqD0yYTU)

**[⬆ Back to Top](#main-contents)**

---

### 20. Pure Functions, Side Effects, State Mutation and Event Propagation

### Articles

- 📜 [Arrays, Objects and Mutations — Federico Knüssel](https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa)
- 📜 [Event Propagation — Bubbling and capturing](https://javascript.info/bubbling-and-capturing)
- 📜 [Event Propagation — MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- 📜 [Functional-ish JavaScript — Daniel Brain](https://medium.com/@bluepnume/functional-ish-javascript-205c05d0ed08)
- 📜 [Functional Programming: Pure Functions — Arne Brasseur](https://www.sitepoint.com/functional-programming-pure-functions/)
- 📜 [Functional programming paradigms in modern JavaScript: Pure functions — Alexander Kondov](https://hackernoon.com/functional-programming-paradigms-in-modern-javascript-pure-functions-797d9abbee1)
- 📜 [Hablemos de Inmutabilidad — Kike Sanchez](https://medium.com/zurvin/hablemos-de-inmutabilidad-3dc65d290783)
- 📜 [How to deal with dirty side effects in your pure functional JavaScript — James Sinclair](https://jrsinclair.com/articles/2018/how-to-deal-with-dirty-side-effects-in-your-pure-functional-javascript/)
- 📜 [JavaScript: Pure Functions — William S. Vincent](https://wsvincent.com/javascript-pure-functions/)
- 📜 [JavaScript: What Are Pure Functions And Why Use Them? — James Jeffery](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
- 📜 [Javascript and Functional Programming — Pure Functions — Omer Goldberg](https://hackernoon.com/javascript-and-functional-programming-pt-3-pure-functions-d572bb52e21c)
- 📜 [Making your JavaScript Pure — Jack Franklin](https://alistapart.com/article/making-your-javascript-pure)
- 📜 [Master the JavaScript Interview: What is a Pure Function? — Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- 📜 [Preventing Side Effects in JavaScript — David Walsh](https://davidwalsh.name/preventing-sideeffects-javascript)
- 📜 [Pure functions in JavaScript — @nicoespeon](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)
- 📜 [Pure Functions In Javascript — Krunal](https://appdividend.com/2017/04/10/pure-functions-in-javascript/)
- 📜 [The State of Immutability — Maciej Sikora](https://medium.com/dailyjs/the-state-of-immutability-169d2cd11310)
- 📜 [Understanding Javascript Mutation and Pure Functions — Chidume Nnamdi](https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3)
- 📜 [Wielding Pure Functions in JavaScript and Function Composition — Peleke Sengstacke](https://scotch.io/tutorials/wielding-pure-functions-in-javascript-and-function-composition)

### Videos

- 🎥 [Event Propagation - JavaScript Event Bubbling and Propagation - Steve Griffith](https://www.youtube.com/watch?v=JYc7gr9Ehl0)
- 🎥 [JavaScript Pure Functions — Seth Alexander](https://www.youtube.com/watch?v=frT3H-eBmPc)
- 🎥 [JavaScript Pure vs Impure Functions Explained — Theodore Anderson](https://www.youtube.com/watch?v=AHbRVJzpB54)
- 🎥 [Pure Functions - Functional Programming in JavaScript — Paul McBride](https://www.youtube.com/watch?v=Jh_Uzqzz_wM)
- 🎥 [Pure Functions - Programação Funcional: Parte 1 - Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk)
- 🎥 [Pure Functions — Hexlet](https://www.youtube.com/watch?v=dZ41D6LDSBg)

**[⬆ Back to Top](#main-contents)**

---

### 21. Closures

### Reference

- 📜 [Closure — JavaScript.Info](https://javascript.info/closure)
- 📜 [Closures — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### Articles

- 📜 [A basic guide to Closures in JavaScript — Parathan Thiyagalingam](https://medium.freecodecamp.org/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e)
- 📜 [A Brief Introduction to Closures and Lexical Scoping in JavaScript — Ashutosh K Singh](https://betterprogramming.pub/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232)
- 📜 [A simple guide to help you understand closures in JavaScript — Prashant Ram](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)
- 📜 [Closure, Currying and IIFE in JavaScript — Ritik](https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9)
- 📜 [Closures: Using Memoization — Brian Barbour](https://dev.to/steelvoltage/closures-using-memoization-3597)
- 📜 [Closures in JavaScript can... - Brandon LeBoeuf](https://dev.to/brandonleboeuf/closure-in-javascript-49n7)
- 📜 [Demystify Closures — stereobooster](https://dev.to/stereobooster/demystify-closures-5g42)
- 📜 [Discover the power of closures in JavaScript — Cristi Salcescu](https://medium.freecodecamp.org/discover-the-power-of-closures-in-javascript-5c472a7765d7)
- 📜 [Do you know Closures - Mohamed Khaled](https://dev.to/this_mkhy/do-you-know-es6-part-3-advanced-3fcl#Closures-2)
- 📜 [Getting Closure — RealLifeJS](http://reallifejs.com/the-meat/getting-closure/)
- 📜 [How to use JavaScript closures with confidence — Léna Faure](https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b)
- 📜 [I never understood JavaScript closures — Olivier De Meulder](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)
- 📜 [JavaScript closures by example — tyler](https://howchoo.com/g/mge2mji2mtq/javascript-closures-by-example)
- 📜 [JavaScript — Closures and Scope — Alex Aitken](https://codeburst.io/javascript-closures-and-scope-3784c75b9290)
- 📜 [Scopes and Closures - JavaScript Concepts — Agney Menon](https://dev.to/boywithsilverwings/scopes-and-closures-javascript-concepts-4dfj)
- 📜 [Understand Closures in JavaScript — Brandon Morelli](https://codeburst.io/understand-closures-in-javascript-d07852fa51e7)
- 📜 [Understanding Closures in JavaScript — Matt Popovich](https://dev.to/mattpopovich/understanding-closures-in-javascript-3k0d)
- 📜 [Understanding Closures in JavaScript — Sukhjinder Arora](https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda)
- 📜 [Understanding JavaScript: Closures — Alexander Kondov](https://hackernoon.com/understanding-javascript-closures-4188edf5ea1b)
- 📜 [Understanding JavaScript Closures: A Practical Approach — Paul Upendo](https://scotch.io/tutorials/understanding-javascript-closures-a-practical-approach)
- 📜 [Understanding JavaScript Closures — Codesmith](https://codeburst.io/understanding-javascript-closures-da6aab330302)
- 📜 [Understand JavaScript Closures With Ease — Richard Bovell](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
- 📜 [whatthefuck.is · A Closure - Dan Abramov](https://whatthefuck.is/closure)

### Videos

- 🎥 [CLOSURES en JavaScript: Qué son y cómo funcionan - Carlos Azaustre](https://youtu.be/xa8lhVwQBw4)
- 🎥 [Closures in JavaScript — techsith](https://www.youtube.com/watch?v=-xqJo5VRP4A)
- 🎥 [Closures in JS - Akshay Saini](https://www.youtube.com/watch?v=qikxEIxsXco)
- 🎥 [Closures — freeCodeCamp](https://www.youtube.com/watch?v=1JsJx1x35c0)
- 🎥 [Closures — Fun Fun Function](https://www.youtube.com/watch?v=CQqwU2Ixu-U)
- 🎥 [JavaScript Closures 101: What is a closure? — JavaScript Tutorials](https://www.youtube.com/watch?v=yiEeiMN2Khs)
- 🎥 [JavaScript Closures — CodeWorkr](https://www.youtube.com/watch?v=-rLrGAXK8WE)
- 🎥 [Javascript Closure — techsith](https://www.youtube.com/watch?v=71AtaJpJHw0)
- 🎥 [JavaScript The Hard Parts: Closure, Scope & Execution Context - Codesmith](https://www.youtube.com/watch?v=XTAzsODSCsM)
- 🎥 [Learn Closures In 7 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=3a0I8ICR1Vg)


**[⬆ Back to Top](#main-contents)**

---

### 22. High Order Functions

### Books

- 📜 [Eloquent JavaScript, 3rd Edition: Ch. 5 - Higher-order Functions](https://eloquentjavascript.net/05_higher_order.html)

### Articles

- 📜 [First-class and Higher Order Functions: Effective Functional JavaScript — Hugo Di Francesco](https://hackernoon.com/effective-functional-javascript-first-class-and-higher-order-functions-713fde8df50a)
- 📜 [Higher-Order Functions in JavaScript — M. David Green](https://www.sitepoint.com/higher-order-functions-javascript/)
- 📜 [Higher Order Functions - A pragmatic approach — emmanuel ikwuoma](https://dev.to/nuel_ikwuoma/higher-order-functions-a-pragmatic-approach-51fb)
- 📜 [Higher Order Functions: Using Filter, Map and Reduce for More Maintainable Code — Guido Schmitz](https://medium.freecodecamp.org/higher-order-functions-in-javascript-d9101f9cf528)
- 📜 [Higher Order Functions in JavaScript — John Hannah](https://www.lullabot.com/articles/higher-order-functions-in-javascript)
- 📜 [Just a reminder on how to use high order functions — Pedro Filho](https://github.com/pedroapfilho/high-order-functions)
- 📜 [Understanding Higher-Order Functions in JavaScript — Sukhjinder Arora](https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad)

### Videos

- 🎥 [Higher-Order Functions ft. Functional Programming - Akshay Saini](https://www.youtube.com/watch?v=HkWxvB1RJq0)
- 🎥 [Higher Order Functions in Javascript — Raja Yogan](https://www.youtube.com/watch?v=dTlpYnmBW9I)
- 🎥 [Higher Order Functions in JavaScript — The Coding Train](https://www.youtube.com/watch?v=H4awPsyugS0)
- 🎥 [Higher Order Functions — Fun Fun Function](https://www.youtube.com/watch?v=BMUiFMZr7vk)
- 🎥 [Higher Order Iterators in JavaScript — Fun Fun Function](https://www.youtube.com/watch?v=GYRMNp1SKXA)
- 🎥 [JavaScript Higher Order Functions & Arrays — Traversy Media](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- 🎥 [Part 1: An Introduction to Callbacks and Higher Order Functions - Codesmith](https://www.youtube.com/watch?v=7E8ctomPQJw)
- 🎥 [Part 2: Understanding Why We Need Higher Order Functions - Codesmith](https://www.youtube.com/watch?v=28MXziDZkE4)

**[⬆ Back to Top](#main-contents)**

---

### 23. Recursion

### Articles

- 📜 [Accio Recursion!: Your New Favorite JavaScript Spell — Leanne Cabey](https://medium.datadriveninvestor.com/accio-recursion-your-new-favorite-javascript-spell-7e10d3125fb3)
- 📜 [Anonymous Recursion in JavaScript — simo](https://dev.to/simov/anonymous-recursion-in-javascript)
- 📜 [Intro to Recursion — Brad Newman](https://medium.com/@newmanbradm/intro-to-recursion-984a8bd50f4b)
- 📜 [Learn and Understand Recursion in JavaScript — Brandon Morelli](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
- 📜 [Programming with JS: Recursion — Alexander Kondov](https://hackernoon.com/programming-with-js-recursion-31371e2bf808)
- 📜 [Recursion, iteration and tail calls in JS — loverajoel](http://www.jstips.co/en/javascript/recursion-iteration-and-tail-calls-in-js/)
- 📜 [Recursion Explained (with Examples) — Christina](https://dev.to/christinamcmahon/recursion-explained-with-examples-4k1m)
- 📜 [Recursion in Functional JavaScript — M. David Green](https://www.sitepoint.com/recursion-functional-javascript/)
- 📜 [Recursion in JavaScript — Kevin Ennis](https://medium.freecodecamp.org/recursion-in-javascript-1608032c7a1f)
- 📜 [Understanding Recursion in JavaScript — Zak Frisch](https://medium.com/@zfrisch/understanding-recursion-in-javascript-992e96449e03)

### Videos

- 🎥 [Javascript Tutorial 34: Introduction To Recursion — codedamn](https://www.youtube.com/watch?v=9NO5dXSlbv8)
- 🎥 [Recursion, Iteration, and JavaScript: A Love Story | JSHeroes 2018 — Anjana Vakil](https://www.youtube.com/watch?v=FmiQr4nfoPQ)
- 🎥 [Recursion: Recursion() — JS Monthly — Lucas da Costa](https://www.youtube.com/watch?v=kGXVsd8pBLw)
- 🎥 [Recursion and Recursive Functions — Hexlet](https://www.youtube.com/watch?v=vLhHyGTkjCs)
- 🎥 [Recursion crash course - Colt Steele](https://www.youtube.com/watch?v=lMBVwYrmFZQ&ab_channel=ColtSteele)
- 🎥 [Recursion In JavaScript — techsith](https://www.youtube.com/watch?v=VtG0WAUvq2w)
- 🎥 [Recursion — Fun Fun Function](https://www.youtube.com/watch?v=k7-N8R0-KY4)
- 🎥 [Recursive Function in JavaScript — kudvenkat](https://www.youtube.com/watch?v=uyjsR9eNTIw)
- 🎥 [What on Earth is Recursion? — Computerphile](https://www.youtube.com/watch?v=Mv9NEXX1VHc)

**[⬆ Back to Top](#main-contents)**

---

### 24. Collections and Generators

### Reference

- 📜 [Generator — MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)

### Articles

- 📜 [An Introduction to JavaScript Generators — Alice Kallaugher](https://dev.to/kallaugher/an-introduction-to-javascript-generators-1224)
- 📜 [Array vs Set vs Map vs Object — Real-time use cases in Javascript (ES6/ES7) — Rajesh Babu](https://codeburst.io/array-vs-set-vs-map-vs-object-real-time-use-cases-in-javascript-es6-47ee3295329b)
- 📜 [ES6 Collections: Using Map, Set, WeakMap, WeakSet — Kyle Pennell](https://www.sitepoint.com/es6-collections-map-set-weakmap-weakset/)
- 📜 [ES6 In Depth: Collections — Jason Orendorff](https://hacks.mozilla.org/2015/06/es6-in-depth-collections/)
- 📜 [ES6 Maps in Depth — Nicolás Bevacqua](https://ponyfoo.com/articles/es6-maps-in-depth)
- 📜 [ES6 WeakMaps, Sets, and WeakSets in Depth — Nicolás Bevacqua](https://ponyfoo.com/articles/es6-weakmaps-sets-and-weaksets-in-depth)
- 📜 [ES6 — Map vs Object — What and when? — Maya Shavin](https://medium.com/front-end-hacking/es6-map-vs-object-what-and-when-b80621932373)
- 📜 [ES6 — Set vs Array — What and when? — Maya Shavin](https://medium.com/front-end-hacking/es6-set-vs-array-what-and-when-efc055655e1a)
- 📜 [ES6: Working with Sets in JavaScript — Dead Code Rising](http://www.deadcoderising.com/es6-working-with-sets-in-javascript/)
- 📜 [How to create an array of unique values in JavaScript using Sets — Claire Parker-Jones](https://dev.to/claireparker/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6)
- 📜 [Map, Set, WeakMap and WeakSet — JavaScript.Info](https://javascript.info/map-set-weakmap-weakset)
- 📜 [Maps in ES6 - A Quick Guide — Ben Mildren](https://dev.to/mildrenben/maps-in-es6---a-quick-guide-35pk)
- 📜 [The Basics of ES6 Generators — Kyle Simpson](https://davidwalsh.name/es6-generators)
- 📜 [Understanding JavaScript Generators With Examples — Arfat Salman](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)
- 📜 [What are JavaScript Generators and how to use them — Vladislav Stepanov](https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e)
- 📜 [What You Should Know About ES6 Maps — Just Chris](https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e)

### Videos

- 🎥 [JavaScript ES6 / ES2015 Set, Map, WeakSet and WeakMap — Traversy Media](https://www.youtube.com/watch?v=ycohYSx5h9w)
- 🎥 [Javascript Generators - THEY CHANGE EVERYTHING - ES6 Generators Harmony Generators — LearnCode.academy](https://www.youtube.com/watch?v=QO07THdLWQo)
- 🎥 [The Differences between ES6 Maps and Sets — Steve Griffith](https://www.youtube.com/watch?v=m4abICrldQI)

**[⬆ Back to Top](#main-contents)**

---

### 25. Promises

### Reference

- 📜 [Promise — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### Articles

- 📜 [A Coding Writer’s Guide: An Introduction To ES6 Promises — Andrew Ly](https://medium.com/@andrewly07/a-coding-writers-guide-an-introduction-to-es6-promises-9ff9f9e88f6c)
- 📜 [An Overview of JavaScript Promises — Sandeep Panda](https://www.sitepoint.com/overview-javascript-promises/)
- 📜 [A Simple Guide to ES6 Promises — Brandon Morelli](https://codeburst.io/a-simple-guide-to-es6-promises-d71bacd2e13a)
- 📜 [Best Practices for ES6 Promises — Basti Ortiz](https://dev.to/somedood/best-practices-for-es6-promises-36da)
- 📜 [Converting callbacks to promises — Zell Liew](https://dev.to/zellwk/converting-callbacks-to-promises-nhn)
- 📜 [ES6 Promises: Patterns and Anti-Patterns — Bobby Brennan](https://medium.com/datafire-io/es6-promises-patterns-and-anti-patterns-bbb21a5d0918)
- 📜 [ES6 Promises in Depth — Nicolás Bevacqua](https://ponyfoo.com/articles/es6-promises-in-depth)
- 📜 [How to use Promises in JavaScript — Prashant Ram](https://medium.freecodecamp.org/promises-in-javascript-explained-277b98850de)
- 📜 [How to Write a JavaScript Promise — Brandon Wozniewicz](https://medium.freecodecamp.org/how-to-write-a-javascript-promise-4ed8d44292b8)
- 📜 [Implementing Promises In JavaScript — Maciej Cieslar](https://medium.freecodecamp.org/how-to-implement-promises-in-javascript-1ce2680a7f51)
- 📜 [JavaScript: Promises explained with simple real life analogies — Shruti Kapoor](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)
- 📜 [JavaScript Promises: Zero To Hero Plus Cheat Sheet — Joshua Saunders](https://medium.com/dailyjs/javascript-promises-zero-to-hero-plus-cheat-sheet-64d75051cffa)
- 📜 [JavaScript Promises Explained By Gambling At A Casino — Kevin Kononenko](https://blog.codeanalogies.com/2018/08/26/javascript-promises-explained-by-gambling-at-a-casino/)
- 📜 [JavaScript Promises for Dummies ― Jecelyn Yeen](https://scotch.io/tutorials/javascript-promises-for-dummies)
- 📜 [JavaScript Visualized: Promises & Async/Await — Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- 📜 [Javascript `Promise` 101 — Igor Irianto](https://dev.to/iggredible/javascript-promise-101-3idl)
- 📜 [Lo que debemos saber de EScript 2020 — Kike Sanchez](https://medium.com/zurvin/lo-que-debemos-saber-de-escript-2020-5fc61da5e4cd)
- 📜 [Master the JavaScript Interview: What is a Promise? — Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- 📜 [Playing with Javascript Promises: A Comprehensive Approach — Rajesh Babu](https://codeburst.io/playing-with-javascript-promises-a-comprehensive-approach-25ab752c78c3)
- 📜 [Promise Basics - javascript.info](https://javascript.info/promise-basics)
- 📜 [Promises - JavaScript concepts — Agney Menon](https://dev.to/boywithsilverwings/promises-javascript-concepts-293c)
- 📜 [Promises for Asynchronous Programming — Exploring JS](http://exploringjs.com/es6/ch_promises.html)
- 📜 [Promises in JavaScript — Peter Klingelhofer](https://dev.to/peterklingelhofer/promises-in-javascript-3h5k)
- 📜 [Simplify JavaScript Promises — Sunny Singh](https://dev.to/sunnysingh/simplify-javascript-promises-4djb)
- 📜 [The Complete JavaScript Promise Guide](https://blog.webdevsimplified.com/2021-09/javascript-promises)
- 📜 [The ES6 Promises — Manoj Singh Negi](https://codeburst.io/the-es6-promises-87a979ab27e4)
- 📜 [The Lowdown on Promises — Aphinya Dechalert](https://medium.matcha.fyi/the-low-down-on-promises-af4a96bbb95f)
- 📜 [Understanding Promises in JavaScript — Chris Noring](https://dev.to/itnext/reverse-engineering-understand-promises-1jfc)
- 📜 [Understanding promises in JavaScript — Gokul N K](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)

### Videos

- 🎥 [Error Handling Promises in JavaScript — Fun Fun Function](https://www.youtube.com/watch?v=f8IgdnYIwOU)
- 🎥 [JavaScript ES6 / ES2015 Promises — Traversy Media](https://www.youtube.com/watch?v=XJEHuBZQ5dU)
- 🎥 [JavaScript Promise in 9 Minutes](https://youtu.be/3NjdOtHpcBM)
- 🎥 [JavaScript Promise in 100 Seconds](https://www.youtube.com/watch?v=RvYYCGs45L4)
- 🎥 [JavaScript Promises In 10 Minutes — Web Dev Simplified ](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- 🎥 [Let's Learn ES6 - Promises — Ryan Christiani](https://www.youtube.com/watch?v=vQ3MoXnKfuQ)
- 🎥 [Promises Part 1 - Topics of JavaScript/ES6 — The Coding Train](https://www.youtube.com/watch?v=QO4NXhWo_NM)
- 🎥 [Promises — Fun Fun Function](https://www.youtube.com/watch?v=2d7s3spWAzo)

**[⬆ Back to Top](#main-contents)**

---

### 26. async/await

### Reference

- 📜 [async/await — JavaScript.Info](https://javascript.info/async-await)

### Books

- 📜 [Eloquent JavaScript, 3rd Edition: Ch. 11 - Asynchronous Programming](https://eloquentjavascript.net/11_async.html)
- 📜 [Exploring JS: Asynchronous Programming](http://exploringjs.com/es6/ch_async.html)

### Articles

- 📜 [7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises — Mostafa Gaafar](https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9)
- 📜 [Async / Await: From Zero to Hero — Zhi Yuan](https://dev.to/zhiyuanamos/async-await-from-zero-to-hero-a22)
- 📜 [Asynchronous JavaScript: From Callback Hell to Async and Await — Demir Selmanovic](https://www.toptal.com/javascript/asynchronous-javascript-async-await-tutorial)
- 📜 [Asynchronous Javascript using async/await — Joy Warugu](https://scotch.io/tutorials/asynchronous-javascript-using-async-await)
- 📜 [Asynchronous Operations in JavaScript — Jscrambler](https://dev.to/jscrambler/asynchronous-operations-in-javascript-2p6b)
- 📜 [Better Than Promises - JavaScript Async/Await](https://blog.webdevsimplified.com/2021-11/async-await/)
- 📜 [Flow Control in Modern JS: Callbacks to Promises to Async/Await — Craig Buckler](https://www.sitepoint.com/flow-control-callbacks-promises-async-await/)
- 📜 [From JavaScript Promises to Async/Await: why bother? — Chris Nwamba](https://blog.pusher.com/promises-async-await/)
- 📜 [How to escape async/await hell — Aditya Agarwal](https://medium.freecodecamp.org/avoiding-the-async-await-hell-c77a0fb71c4c)
- 📜 [How to improve your asynchronous Javascript code with async and await — Indrek Lasn](https://medium.freecodecamp.org/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda)
- 📜 [JavaScript: Promises and Why Async/Await Wins the Battle — Nick Parsons](https://dzone.com/articles/javascript-promises-and-why-asyncawait-wins-the-ba)
- 📜 [JavaScript: Promises or async-await — Gokul N K](https://medium.com/better-programming/should-i-use-promises-or-async-await-126ab5c98789)
- 📜 [JavaScript Async/Await: Serial, Parallel and Complex Flow — TechBrij](https://techbrij.com/javascript-async-await-parallel-sequence)
- 📜 [JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)
- 📜 [JavaScript Visualized: Promises & Async/Await — Lydia Hallie](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
- 📜 [Javascript — ES8 Introducing async/await Functions — Ben Garrison](https://medium.com/@_bengarrison/javascript-es8-introducing-async-await-functions-7a471ec7de8a)
- 📜 [Making asynchronous programming easier with async and await — MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- 📜 [Making Fetches Easy With Async Await — Mickey Sheridan](https://medium.com/@micksheridan.24/making-fetches-easy-with-async-await-8a1246efa1f6)
- 📜 [Modern Asynchronous JavaScript with async/await — Flavio Copes](https://flaviocopes.com/javascript-async-await/)
- 📜 [Understanding async/await in Javascript — Gokul N K](https://hackernoon.com/understanding-async-await-in-javascript-1d81bb079b2c)
- 📜 [Understanding JavaScript’s async await — Nicolás Bevacqua](https://ponyfoo.com/articles/understanding-javascript-async-await)

### Videos

- 🎥 [Async + Await — Wes Bos](https://www.youtube.com/watch?v=9YkUCxvaLEk)
- 🎥 [async/await in JavaScript - What, Why and How — Fun Fun Function](https://www.youtube.com/watch?v=568g8hxJJp4&index=3&list=PL0zVEGEvSaeHJppaRLrqjeTPnCH6)
- 🎥 [async/await Part 1 - Topics of JavaScript/ES8 — The Coding Train](https://www.youtube.com/watch?v=XO77Fib9tSI&index=3&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
- 🎥 [async/await Part 2 - Topics of JavaScript/ES8 — The Coding Train](https://www.youtube.com/watch?v=chavThlNz3s&index=4&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)
- 🎥 [Asynchrony: Under the Hood — Shelley Vohr](https://www.youtube.com/watch?v=SrNQS8J67zc)
- 🎥 [Complete Guide to JS Async & Await ES2017/ES8 — Colt Steele](https://www.youtube.com/watch?v=krAYA4rvbdA)
- 🎥 [JavaScript Async Await — Web Dev Simplified](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- 🎥 [Tips for using async/await in JavaScript — James Q Quick](https://www.youtube.com/watch?v=_9vgd9XKlDQ)

**[⬆ Back to Top](#main-contents)**

---

### 27. Data Structures

### Articles

- 📜 [Algorithms and Data Structures in JavaScript — Oleksii Trekhleb](https://itnext.io/algorithms-and-data-structures-in-javascript-a71548f902cb)
- 📜 [All algorithms writing with JavaScript in the book 'Algorithms Fourth Edition'](https://github.com/barretlee/algorithms)
- 📜 [All the things you didn't know you wanted to know about data structures](https://github.com/jamiebuilds/itsy-bitsy-data-structures)
- 📜 [Collection of classic computer science paradigms in JavaScript](https://github.com/nzakas/computer-science-in-javascript)
- 📜 [Data Structures: Objects and Arrays ― Chris Nwamba](https://scotch.io/courses/10-need-to-know-javascript-concepts/data-structures-objects-and-arrays)
- 📜 [Data Structures: Understanding Graphs — Rachel Hawa](https://medium.com/javascript-in-plain-english/data-structures-understanding-graphs-82509d35e6b5)
- 📜 [Data structures in JavaScript — Benoit Vallon](http://blog.benoitvallon.com/data-structures-in-javascript/data-structures-in-javascript/)
- 📜 [Data Structures in JavaScript — Thon Ly](https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c)
- 📜 [Data Structures Two Ways: Linked List (Pt 1) — Freddie Duffield](https://dev.to/freddieduffield/data-structures-two-ways-linked-list-2n61)
- 📜 [Data Structures Two Ways: Linked List (Pt 2) — Freddie Duffield](https://dev.to/freddieduffield/data-structures-two-ways-linked-list-pt2-2i60)
- 📜 [Graph Data Structures Explained in JavaScript — Adrian Mejia](https://dev.to/amejiarosario/graph-data-structures-for-beginners-5edn)
- 📜 [JavaScript Data Structures: 40 Part Series — miku86](https://dev.to/miku86/series/3259)
- 📜 [Playing with Data Structures in Javascript — Anish K.](https://blog.cloudboost.io/playing-with-data-structures-in-javascript-stack-a55ebe50f29d)
- 📜 [The Little Guide of Queue in JavaScript — Germán Cutraro](https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9)

### Videos

- 🎥 [Algorithms In Javascript | Ace Your Interview — Eduonix Learning Solutions](https://www.youtube.com/watch?v=H_EBPZgiAas&list=PLDmvslp_VR0zYUSth_8O69p4_cmvZEgLa)
- 🎥 [Data Structures and Algorithms in JavaScript — freeCodeCamp](https://www.youtube.com/watch?v=Gj5qBheGOEo&list=PLWKjhJtqVAbkso-IbgiiP48n-O-JQA9PJ)
- 🎥 [JavaScript Data Structures: Getting Started — Academind](https://www.youtube.com/watch?v=41GSinwoMYA&ab_channel=Academind)
- 🎥 [Learning JavaScript Data Structures and Algorithms: Sorting — Packt Video](https://www.youtube.com/watch?v=Ymh_AurrMbA)

**[⬆ Back to Top](#main-contents)**

---

### 28. Expensive Operation and Big O Notation

### Articles

- 📜 [Algorithms in plain English: time complexity and Big-O Notation — Michael Olorunnisola](https://medium.freecodecamp.org/time-is-complex-but-priceless-f0abd015063c)
- 📜 [An Introduction to Big O Notation — Joseph Trettevik](https://dev.to/lofiandcode/an-introduction-to-big-o-notation-210o)
- 📜 [Big O in JavaScript — Gabriela Medina](https://medium.com/@gmedina229/big-o-in-javascript-36ff67766051)
- 📜 [Big O Notation in Javascript — César Antón Dorantes](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)
- 📜 [Big O Search Algorithms in JavaScript — Bradley Braithwaite](https://www.bradoncode.com/blog/2012/04/big-o-algorithm-examples-in-javascript.html)
- 📜 [Time Complexity/Big O Notation — Tim Roberts](https://medium.com/javascript-scene/time-complexity-big-o-notation-1a4310c3ee4b)

### Videos

- 🎥 [Big O Notation - Time Complexity Analysis — WebTunings](https://www.youtube.com/watch?v=ALl86xJiTD8)
- 🎥 [Essential Big O for JavaScript Developers — Dave Smith](https://www.youtube.com/watch?v=KatlvCFHPRo)
- 🎥 [JavaScript: Intro to Big O Notation and Function Runtime — Eric Traub](https://www.youtube.com/watch?v=HgA5VOFan5E)

**[⬆ Back to Top](#main-contents)**

---

### 29. Algorithms

### Articles

- 📜 [Algorithms and data structures implemented in JavaScript with explanations and links to further readings](https://github.com/trekhleb/javascript-algorithms)
- 📜 [Algorithms and Data Structures in JavaScript — Oleksii Trekhleb](https://dev.to/trekhleb/algorithms-and-data-structures-in-javascript-49i3)
- 📜 [Algorithms in JavaScript — Thon Ly](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038)
- 📜 [Atwood's Law applied to CS101 - Classic algorithms and data structures implemented in JavaScript](https://github.com/felipernb/algorithms.js)
- 📜 [Collection of computer science algorithms and data structures written in JavaScript](https://github.com/idosela/algorithms-in-javascript)
- 📜 [Data Structures and Algorithms library in JavaScript](https://github.com/yangshun/lago)
- 📜 [Data Structures and Algorithms using ES6](https://github.com/Crizstian/data-structure-and-algorithms-with-ES6)
- 📜 [JavaScript Objects, Square Brackets and Algorithms — Dmitri Grabov](https://medium.freecodecamp.org/javascript-objects-square-brackets-and-algorithms-e9a2916dc158)
- 📜 [JS: Interview Algorithm](http://www.thatjsdude.com/interview/js1.html)

**[⬆ Back to Top](#main-contents)**

---

### 30. Inheritance, Polymorphism and Code Reuse

### Reference

- 📜 [Class inheritance, super — JavaScript.Info](https://javascript.info/class-inheritance)
- 📜 [Inheritance in JavaScript — MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)

### Articles

- 📜 [Inheritance in JavaScript — Rupesh Mishra](https://hackernoon.com/inheritance-in-javascript-21d2b82ffa6f)
- 📜 [JavaScript — Inheritance, delegation patterns and Object linking — NC Patro](https://codeburst.io/javascript-inheritance-25fe61ab9f85)
- 📜 [Object-oriented JavaScript: A Deep Dive into ES6 Classes — Jeff Mott](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
- 📜 [Object Oriented JavaScript: Polymorphism with examples — Knoldus Blogs](https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/)
- 📜 [Program Like Proteus — A beginner’s guide to polymorphism in Javascript — Sam Galson](https://medium.com/yld-blog/program-like-proteus-a-beginners-guide-to-polymorphism-in-javascript-867bea7c8be2)
- 📜 [Simple Inheritance with JavaScript — David Catuhe](https://www.sitepoint.com/simple-inheritance-javascript/)

### Videos

- 🎥 [Inheritance in JavaScript — kudvenkat](https://www.youtube.com/watch?v=yXlFR81tDBM)
- 🎥 [JavaScript ES6 Classes and Inheritance — Traversy Media](https://www.youtube.com/watch?v=RBLIm5LMrmc)
- 🎥 [Polymorphism in JavaScript — kudvenkat](https://www.youtube.com/watch?v=zdovG9cuEBA)

**[⬆ Back to Top](#main-contents)**

---

### 31. Design Patterns

### Books

- 📜 [Learning JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

### Articles

- 📜 [4 JavaScript Design Patterns You Should Know — Devan Patel](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)
- 📜 [Adapter Pattern - Francesco Ciulla](https://dev.to/francescoxx/adapter-pattern-5bjk)
- 📜 [All the 23 (GoF) design patterns implemented in Javascript — Felipe Beline](https://github.com/fbeline/Design-Patterns-JS)
- 📜 [Design Patterns: Null Object - Carlos Caballero](https://medium.com/better-programming/design-patterns-null-object-5ee839e37892)
- 📜 [Design Patterns for Developers using JavaScript pt. II — Oliver Mensah](https://dev.to/omensah/design-patterns-for-developers-using-javascript---part-two--3p39)
- 📜 [Design Patterns for Developers using JavaScript pt. I — Oliver Mensah](https://dev.to/omensah/design-patterns-for-developers-using-javascript----part-one--b3e)
- 📜 [Design patterns in modern JavaScript development](https://levelup.gitconnected.com/design-patterns-in-modern-javascript-development-ec84d8be06ca)
- 📜 [In Defense of Defensive Programming - Adam Nathaniel Davis](https://dev.to/bytebodger/in-defense-of-defensive-programming-k45)
- 📜 [JavaScript Design Patterns - Factory Pattern — KristijanFištrek](https://dev.to/kristijanfistrek/javascript-design-patterns-factory-pattern-562p)
- 📜 [JavaScript Design Patterns: Understanding Design Patterns in JavaScript - Sukhjinder Arora](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd)
- 📜 [Javascript Design Patterns: What They Are & How To Use Them — Patrick Simpson](https://seesparkbox.com/foundry/javascript_design_patterns)
- 📜 [JavaScript Design Patterns – Beginner's Guide to Mobile Web Development — Soumyajit Pathak](https://medium.com/beginners-guide-to-mobile-web-development/javascript-design-patterns-25f0faaaa15)
- 📜 [JavaScript Design Patterns — Akash Pal](https://medium.com/front-end-hacking/javascript-design-patterns-ed9d4c144c81)
- 📜 [JavaScript Design Pattern — Module Pattern - Factory Pattern — Moon](https://medium.com/javascript-in-plain-english/javascript-design-pattern-module-pattern-555737eccecd)
- 📜 [Strategy Pattern - Francesco Ciulla](https://dev.to/francescoxx/strategy-pattern-5oh)
- 📜 [The Power of Composite Pattern in JavaScript - jsmanifest](https://dev.to/jsmanifest/the-power-of-composite-pattern-in-javascript-2732)
- 📜 [The Power of the Module Pattern in JavaScript — jsmanifest](https://medium.com/better-programming/the-power-of-the-module-pattern-in-javascript-3c73f7cd10e8)
- 📜 [Understanding Design Patterns: Iterator using Dev.to and Medium social networks! — Carlos Caballero](https://dev.to/carlillo/understanding-design-patterns-iterator-using-dev-to-and-medium-social-networks-3bdd)

### Videos

- 🎥 [JavaScript Design Patterns — Udacity](https://www.udacity.com/course/javascript-design-patterns--ud989)
- 🎥 [JavaScript Patterns for 2017 — Scott Allen](https://www.youtube.com/watch?v=hO7mzO83N1Q)

**[⬆ Back to Top](#main-contents)**

---

### 32. Partial Applications, Currying, Compose and Pipe

### Books

- 📜 [Functional-Light JavaScript: Ch. 3 - Managing Function Inputs — Kyle Simpson](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md)

### Articles

- 📜 [A Gentle Introduction to Functional JavaScript pt III: Functions for making functions — James Sinclair](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/)
- 📜 [An Introduction to Functional Programming Style in JavaScript — JavaScript Teacher](https://medium.freecodecamp.org/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064)
- 📜 [An introduction to the basic principles of Functional Programming — TK](https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84)
- 📜 [A practical guide to writing more functional JavaScript — Nadeesha Cabral](https://medium.freecodecamp.org/a-practical-guide-to-writing-more-functional-javascript-db49409f71)
- 📜 [A simple explanation of functional pipe in JavaScript — Ben Lesh](https://dev.to/benlesh/a-simple-explanation-of-functional-pipe-in-javascript-2hbj)
- 📜 [Composition and Currying Elegance in JavaScript — Pragyan Das](https://medium.com/@pragyan88/writing-middleware-composition-and-currying-elegance-in-javascript-8b15c98a541b)
- 📜 [Concepts of Functional Programming in Javascript — TK](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
- 📜 [Curry And Compose (why you should be using something like ramda in your code) — jsanchesleao](https://jsleao.wordpress.com/2015/02/22/curry-and-compose-why-you-should-be-using-something-like-ramda-in-your-code/)
- 📜 [Currying in JavaScript ES6 — Adam Bene](https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400)
- 📜 [Currying vs Partial Application — Deepak Gupta](https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8)
- 📜 [Curry or Partial Application? — Eric Elliott](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8)
- 📜 [Functional Composition: compose() and pipe() — Anton Paras](https://medium.com/@acparas/what-i-learned-today-july-2-2017-ab9a46dbf85f)
- 📜 [Functional Composition in Javascript — Joe Cortopassi](https://joecortopassi.com/articles/functional-composition-in-javascript/)
- 📜 [Functional JavaScript: Function Composition For Every Day Use — Joel Thoms](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)
- 📜 [Function Composition in JavaScript with Pipe — Andy Van Slaars](https://vanslaars.io/post/create-pipe-function/)
- 📜 [Partial Application in ECMAScript 2015 — Ragan Wald](http://raganwald.com/2015/04/01/partial-application.html)
- 📜 [Partial Application in JavaScript — Ben Alman](http://benalman.com/news/2012/09/partial-application-in-javascript/)
- 📜 [Partial Application of Functions — Functional Reactive Ninja](https://hackernoon.com/partial-application-of-functions-dbe7d9b80760)
- 📜 [Practical Functional JavaScript with Ramda — Andrew D'Amelio, Yuri Takhteyev](https://developer.telerik.com/featured/practical-functional-javascript-ramda/)
- 📜 [So You Want to be a Functional Programmer pt. III — Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-3-1b0fd14eb1a7)
- 📜 [So You Want to be a Functional Programmer pt. II — Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a)
- 📜 [So You Want to be a Functional Programmer pt. IV — Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-4-18fbe3ea9e49)
- 📜 [So You Want to be a Functional Programmer pt. I — Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)
- 📜 [So You Want to be a Functional Programmer pt. V — Charles Scalfani](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-5-c70adc9cf56a)
- 📜 [The beauty in Partial Application, Currying, and Function Composition — Joel Thoms](https://hackernoon.com/the-beauty-in-partial-application-currying-and-function-composition-d885bdf0d574)
- 📜 [Use function composition in JavaScript — Rémi](https://www.codementor.io/michelre/use-function-composition-in-javascript-gkmxos5mj)
- 📜 [Why The Hipsters Compose Everything: Functional Composing In JavaScript — A. Sharif](http://busypeoples.github.io/post/functional-composing-javascript/)

### Videos

- 🎥 [call, apply and bind method in JavaScript](https://www.youtube.com/watch?v=75W8UPQ5l7k&t=261s)
- 🎥 [Compose vs Pipe: Functional Programming in JavaScript — Chyld Studios](https://www.youtube.com/watch?v=Wl2ejJOqHUU)
- 🎥 [Function Composition - Functional JavaScript — NWCalvank](https://www.youtube.com/watch?v=mth5WpEc4Qs)
- 🎥 [JavaScript Functional Programing: Compose — Theodore Anderson](https://www.youtube.com/watch?v=jigHxo9YR30)
- 🎥 [JavaScript Function Composition Explained — Theodore Anderson](https://www.youtube.com/watch?v=Uam37AlzPYw)
- 🎥 [JavaScript Partial Application — Theodore Anderson](https://www.youtube.com/watch?v=jkebgHEcvac)
- 🎥 [Let's code with function composition — Fun Fun Function](https://www.youtube.com/watch?v=VGB9HbL1GHk)
- 🎥 [Partial Application vs. Currying — NWCalvank](https://www.youtube.com/watch?v=DzLkRsUN2vE)

**[⬆ Back to Top](#main-contents)**

---

### 33. Clean Code

#### Articles

- 📜 [Best practices for cross node/web development - Jimmy Wärting](https://github.com/cross-js/cross-js)
- 📜 [Best Practices for Using Modern JavaScript Syntax — M. David Green](https://www.sitepoint.com/modern-javascript-best-practices/)
- 📜 [Clean code, dirty code, human code - Daniel Irvine](https://dev.to/d_ir/clean-code-dirty-code-human-code-6nm)
- 📜 [Clean Code concepts adapted for JavaScript — Ryan McDermott](https://github.com/ryanmcdermott/clean-code-javascript)
- 📜 [Clean Code Explained – A Practical Introduction to Clean Coding for Beginners — freeCodeCamp](https://www.freecodecamp.org/news/clean-coding-for-beginners/)
- 📜 [Clean Code Practice: How to write clean code — Tirth Bodawala](https://www.atyantik.com/clean-code-practices-javascript/)
- 📜 [Function parameters in JavaScript Clean Code — Kevin Peters](https://medium.com/@kevin_peters/function-parameters-in-javascript-clean-code-4caac109159b)
- 📜 [Keeping your code clean — Samuel James](https://codeburst.io/keeping-your-code-clean-d30bcffd1a10)
- 📜 [Practical Ways to Write Better JavaScript - Ryland G](https://dev.to/taillogs/practical-ways-to-write-better-javascript-26d4)
- 📜 [The Clean Code Book - Robert C Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/)
- 📜 [The Must-Know Clean Code Principles - Kesk on Medium](https://medium.com/swlh/the-must-know-clean-code-principles-1371a14a2e75)
- 📜 [Writing Clean Code - Dylan Paulus](https://dev.to/ganderzz/on-writing-clean-code-57cm)
- 📜 [Writing Clean Code and The Practice of Programming - Nityesh Agarwal](https://dev.to/nityeshaga/writing-clean-code-and-the-practice-of-programming-actionable-advice-for-beginners-5f0k)

### Videos

- 🎥 [Clean Code playlist - Beau teaches](https://www.youtube.com/watch?v=b9c5GmmS7ks&list=PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh&index=1)
- 🎥 [JavaScript Pro Tips - Code This, NOT That](https://www.youtube.com/watch?v=Mus_vwhTCq0)

**[⬆ Back to Top](#main-contents)**

[Source](https://github.com/leonardomso/33-js-concepts)


## <a id="advanced">Advanced concepts</a>
A deep study about advanced javascript concepts. These concepts are not ranged by alphabet order because they should be learned exactly in this order.

### Summary

- [ How the browser understands javascript code ](#how-the-browser-understands-javascript)
- [ Stack and Heap Memory ](#stack-and-heap-memory)
- [ Garbage collection ](#garbage-collection)
- [ Main causes of memory leak ](#main-causes-of-memory-leak)
- [ Javascript runtime ](#javascript-runtime)
- [ Hoisting ](#hoisting)
- [ Function Invocation ](#function-invocation)
- [ Strict Mode ](#strict-mode)
- [ Block scope ](#block-scope)
- [ Manipulating 'this' keyword ](#manipulating-this-keyword)
- [ Javascript types ](#javascript-types)
- [ Type coercion ](#type-coercion)
- [ Closures and Memory ](#closures-and-memory)
- [ Constructor Functions ](#constructor-functions)
- [ Pure Functions ](#pure-functions)
- [ Closure Functions ](#closure-functions)

<a name="javascript-foundation"></a>

##### How the browser understands javascript code

There is a **Engine** which is capable of making some work to make the javascript code to be compiled into machine code during its execution and so interpreted dynamically.

Every browser has its own engine, today the most famous is called **V8 Engine** and it is used by Google Chrome and new versions of Internet Explorer.

Below you can see the steps followed by the **Engine** in order to make the javascript code interpretable by computer:

- ```Parser```
	- The javascript code is parsed based on its syntax (variable declarations, function declarations, etc) into a **AST - Abstract Syntax Tree** (it is basically a JSON of the code formated into a tree).

After the step above, the following ones happen at the same time:

- ```Interpreter```
	- Turns the **AST** into **Bytecode** (not a machine code, but executable with engine help) that gets executed by the computer on the fly (it is a work around to make the code to be executed as fast as possible by the browser, since it is not actually optimized and a real machine code but is executable anyway).

- ```Compiler```
	- While the **Interpreter** is running, it makes optimizations on the created **Bytecode**. After making the needed optimizations, it replaces the **old non-optimized Bytecode** with the new changes.

So, with the steps above (called JIT Compiler - Just In Time Compiler), the code gets executed on the fly while making needed optimizations to improve the application speed.

<a name="stack-and-heap-memory"></a>

##### Stack and Heap Memory

The common declarations below will be done with **Stack Memory**:
```js
// declaring numbers and strings
const x = 1;
const y = "mota";

// calling a function in the simple way
function something() {
	console.log("something");
};
something();
```

And the following ones will be done with **Heap Memory**:
```js
// object declaration
const user = {
	name: "mota"
};

// using the 'new' keyword to call a function
function userName(userName) {
	this.userName = userName;
};
new userName("mota");

// using the 'new' keyword to call a class
class UserLastName {};
new UserLastName();
```

<a name="garbage-collection"></a>

##### Garbage collection
In Javascript, the garbage collection occurs automatically (since it is a manual job on another languages like C).

Basically, the garbage collector works on variables that are not pointing to any memory space, per example:

```js
var user = {
	name: "Mota",
	lastName: "Bromonschenkel"
}

user = 1

// The garbage collector will clear the last value and keep the new one
```

<a name="main-causes-of-memory-leak"></a>

##### Main causes of memory leak

A memory leak occurs when we start using some space in memory and it doesn't get back to us with the garbage collector help.

In generally there are mainly causes of memory leak, per example:
- Global variables
- Event listeners
- setInterval functions

<a name="javascript-runtime"></a>

##### Javascript runtime

Generally in Javascript we have three different environments which are needed to run the code:

1. **Call Stack / Memory Heap:** Common javascript code
```js
console.log("Call Stack / Memory Heap")
```

2. **Job Queue - Microtask Queue:** Asynchronous code
```js
Promise.resolve(console.log("Job Queue - Microtask Queue"))
```

3. **Callback Queue - Task Queue:** Browser functions derived from the global object
```js
setTimeout(() => console.log("Callback Queue - Task Queue"), 0)
```


So if we run the following code:
```js
setTimeout(() => console.log("Callback Queue - Task Queue"), 0) // Third

Promise.resolve(console.log("Job Queue - Microtask Queue")) // Second

console.log("Call Stack / Memory Heap") // First
```

1. The ```setTimeout(() => console.log("Callback Queue - Task Queue"), 0)``` gets into the **Web API**.

2. The ```Promise.resolve(console.log("Job Queue - Microtask Queue"))``` gets into the **Job Queue**.

3. The ```console.log("Call Stack / Memory Heap")``` gets into the **Call Stack** and gets executed.

4. The **Event Loop** do the following:
	- Is the Call Stack empty?
		- **True**: Is there any job on **Job Queue**?
			- **True**: ```Promise.resolve(console.log("Job Queue - Microtask Queue"))``` is moved from the **Job Queue** to the **Call Stack** and gets executed.

5. The **Event Loop** do the following:
	- Is the Call Stack empty?
		- **True**: Is there any job on **Job Queue**?
			- **False**: Is there any job on **Web API**?
				- **True**: ```setTimeout(() => console.log("Callback Queue - Task Queue"), 0)``` is moved from the **Web API** to the **Callback Queue** and gets executed.


<a name="hoisting"></a>

##### Hoisting

A hoist occurs when we call a variable/function before defining it (and it works without errors), because the Javascript Engine reads all code during the creation phase, asks for some space on the heap memory to put some declared variables/functions (in order to improve first time execution speed) and then executes it. Below you can see an example of hoisting:
```js
console.log(lastName) // Prints 'mota'
var lastName = "mota"

console.log(getFirstName()) // Prints 'guilherme'
function getFirstName() {
	return "guilherme"
}
```

If you want to avoid hoisting, you can do the following:
```js
console.log(firstName) // Error 'firstName' is not defined'
const firstName = "guilherme"

console.log(lastName) // Error 'lastName' is not defined'
let lastName = "mota"

console.log(getNumber()) // Error 'getNumber' is not defined'
(function getNumber() {
		return 1
})
```

<a name="function-invocation"></a>

##### Function Invocation

We can define a function as an expression or a declaration. The main difference between them is that **Function Expressions** get defined during the code execution and **Function Declarations** get defined during the code parsing.

```js
// Function Expression
const printName = () => {
	console.log("Guilherme")
}

// Function Declaration
function printLastName() {
	console.log("Mota")
}
```

<a name="strict-mode"></a>

##### Strict mode

If we run the following code, it will not trigger any error:

```js
function test() {
	tested = 1
}

test() // Runs without errors
```

In order to prevent it from happening, we can add the 'use strict' keyword that will force some ECMAScript validations:

```js
'use strict'

function test() {
	tested = 1
}

test() // Triggers error: 'tested is not defined'
```

<a name="block-scope"></a>

##### Block scope

When we create some statement using brackets, we're only able to access variables if they are declared with 'var' keyword

```js
// Works
if (5 > 4) {
	var a = 1
}
console.log(a)

// Does not work
if (5 > 4) {
	const a = 1
}
console.log(a)

// Does not work
if (5 > 4) {
	let a = 1
}
console.log(a)

```

<a name="manipulating-this-keyword"></a>

##### Manipulating 'this' keyword

When dealing with **this** keyword, we have the following methods (that are created during the function instancing): **call, apply, bind**.

```js
const wizard = {
	name: "Merlin",
	health: 100,
	heal(firstHp, secondHp) {
		this.health += firstHp + secondHp;
	}
}

const archer = {
	name: "Robin Hood",
	health: 30
}

// Use function 'heal' of wizard on archer
// passing '100' as the function argument
wizard.heal.call(archer, 100, 100) // Heals by 200
wizard.heal.apply(archer, [100, 100]) // Heals by 200

// Returns the updated method, without executing it
archer.heal = wizard.heal.bind(archer, 100)
archer.heal(100) // Heals archer by 200 hp
```

<a name="javascript-types"></a>

##### Javascript types

- Primitive Types: Usually represents a single type on memory
```js
typeof 5 // number
typeof true // boolean
typeof "mota" // string
typeof undefined // undefined
typeof null // object
typeof Symbol("mota") // symbol
```

- Non Primitive Types: Does not represent a type on memory
```js
typeof {} // object
typeof [] // object
typeof function(){} // function (but it is actually an object)
```

Even with these multiple types, we can say that **almost everything in Javascript** is an **object**, since the wrappers used to create other types are objects, per example:
```js
// true has property to string even being an boolean
true.toString() // 'true'

// Because the above is the same as using the boolean wrapper that is an object
Boolean(true).toString() // 'true'
```

Obs: If a data is explicitly of type **object** (usually we can guarantee it using the 'typeof' keyword), it will be instanced on **Heap Memory** and so **Passed by Reference** to methods.
```js
const firstCat = { name: "Bob" }

const secondCat = firstCat

secondCat.name = "Ana"

console.log(firstCat.name) // 'Ana'
console.log(secondCat.name) // 'Ana'
```

<a name="type-coercion"></a>

##### Type coercion

Type coercion means the own language converts types to make use of statements, etc.

Per example, everything in Javascript is considered **true** except for the following:
```js
false
0
""
null
undefined
NaN
```

<a name="closures-and-memory"></a>

##### Closures and Memory

We're able to reuse functions without having to create it in memory after every call. It can be done with help of **closure**.

```js
function heavyDuty(index) {
	const bigArray = new Array(7000).fill("mota")

	console.log("Created: heavyDuty")

	return bigArray[index]
}

function heavyDutyClosure() {
	const bigArray = new Array(7000).fill("mota")

	console.log("Created: heavyDutyClosure")

	return function(index) {
		return bigArray[index]
	}
}

heavyDuty(500)
heavyDuty(600)
heavyDuty(700)

const getHeavyDutyClosure = heavyDutyClosure()

getHeavyDutyClosure(500)
getHeavyDutyClosure(600)
getHeavyDutyClosure(700)

/*
 * The console.log will look like:
 *
 * Created: heavyDuty
 * Created: heavyDuty
 * Created: heavyDuty
 * Created: heavyDutyClosure
 */
```

<a name="constructor-functions"></a>

##### Constructor Functions

Since functions in Javascript has inherit its prototype from object (what makes them a special type of object), we can create objects by using the "new" keyword on function as you can see below:

```js
function Elf(name, weapon) {
	this.name = name
	this.weapon = weapon
}

Elf.prototype.attack = function() {
	return "Attack with " + this.weapon
}

const peter = new Elf("Peter", "stones")
console.log(peter.attack()) // output: Attack with stones

const sam = new Elf("Sam", "fire")
console.log(sam.attack()) // output: Attack with fire

/**
 * In case we want to use a function inside a method while accessing
 * the "this" keyword, we have to add the "this" to a new variable
 * since a common function in Javascript is considered an object
 * and the "this" keyword inside it will refer to this function itself.
 */
Elf.prototype.build = function() {
	const self = this

	function building() {
		return self.name + "builds a house"
	}

	return building()
}
/**
 * We can make a simple workaround to the problem above by using
 * arrow functions, since them, different of common functions,
 * don't create an own scope, so it inherits the scope from the
 * parent function.
 */
Elf.prototype.build = function() {
	const building = () => {
		return this.name + "builds a house"
	}

	return building()
}
```

<a name="pure-functions"></a>

##### Pure Functions

We call pure functions the ones which don't cause side effects all around the code. They are the core of **functional programming**.

```js
// Cause side-effects
const array = [1, 2, 3]
function removeLastItem(arr) {
	arr.pop()
}
removeLastItem(array)
console.log(array) // [1, 2]

// Doesn't cause any side-effects
const array = [1, 2, 3]
function removeLastItem(arr) {
	const copiedArray = [...arr]
	copiedArray.pop()
	return copiedArray
}
console.log(removeLastItem(array)) // [1, 2]
console.log(array) // [1, 2, 3]
```

<a name="closure-functions"></a>

##### Closure Functions

Closure is such a way to create HOF (High order functions) that share **state** (variables, methods, etc) with **children functions**, what means that the children can change state of its parents.

```js
const closure = function() {
	let count = 0

	return function increment() {
		count++
		
		console.log(count)
	}
}

const incrementFunction = closure()

incrementFunction() // 1
incrementFunction() // 2
incrementFunction() // 3
```

[Source](https://github.com/leonardomso/33-js-concepts)
**[⬆ Back to Top](#main-contents)**

## <a id="images">Concepts in images</a>

Understand Javascript concepts with neat code & simple words that are covered in images. These concepts are not ranged by alphabet order because they should be learned exactly in this order. 

##### 1. Scope of const, let, and var

<div>
<img src="./images/const.png" width="70%" alt="scope of const" />

<img src="./images/let.png" width="70%" alt="scope of let" />

<img src="./images/var.png" width="70%" alt="scope of var" />
</div>

##### 2. Optional-Chaining

<img src="./images/Optional%20chaining.png" alt="Optional Chaining in javascript" />

##### 3. Nullish-coalescing-operator

<img src="./images/Nullish-coalescing-operator.png" alt="Nullish coalescing operator javascript" />

##### 4. || vs ?? [OR operator vs Nullish coalescing operator]

<img src="./images/__%20vs%20__.png" alt="OR operator vs coalescing operator javascript" />

##### 5. Easiest way to handle error in async-await

<img src="./images/async-await-error-handling.png" alt="handling error in async await javascript" />

##### 6. Add script dynamically

<img src="./images/add-script-dynamically.png" width="70%" alt="add script dynamically in javascript" />

##### 7. Format Date and Time with javascript

<img src="./images/format-date-time.png" alt="format date and time with javascript" />

##### 8. Get Timezone with javascript

<img src="./images/get-time-zone.png" alt="get timezone in javascript" />

[1]: https://www.surjeetbhadauriya.com
[2]: https://twitter.com/catchme822
[3]: https://in.linkedin.com/in/surjeet-bhadauriya-b26a1183
[4]: https://github.com/suri66
[5]: https://www.instagram.com/beingsurjeet/
[6]: https://www.facebook.com/surjeetsingh.bhadauriya
[7]: https://stackoverflow.com/users/5939058/surjeet-bhadauriya?tab=profile
[8]: https://www.youtube.com/channel/UCuZjuJzMLeJi3SW4qd8-Vlg

[Source](https://github.com/suri66/JS-IN-EASY-WAY/tree/master)

**[⬆ Back to Top](#main-contents)**

## <a id="visual">Javascript Visual Explanations</a>

This repo contains links to pages in which concepts from JavaScript/frontend ecosystem are explained visually (pictures, diagrams, animations etc.). These concepts are ranged by alphabet order.

###### <a id="table-of-contents">Table of Contents</a>

* [2D Graphics](#2d-graphics)
* [Angular](#angular)
* [Codebase](#codebase)
* [Event loop](#event-loop)
* [Fiber](#fiber)
* [Flex](#flex)
* [Flux](#flux)
* [Functional Programming](#functional-programming)
* [Gamedev](#gamedev)
* [General programming / JavaScript](#general-programming--javascript)
* [Grid](#grid)
* [HTML/CSS](#htmlcss)
* [Immutable.js](#immutablejs)
* [JavaScript Engines](#javascript-engines)
* [Node.js](#nodejs)
* [React](#react)
* [Reactive programming](#reactive-programming)
* [Redux](#redux)
* [Regular expressions](#regular-expressions)
* [Relay](#relay)
* [Rx.js](#rx-js)
* [Service Workers](#service-workers)
* [Tools](#tools)
* [Virtual DOM](#virtual-dom)
* [Vue](#vue)
* [Web protocols](#web-protocols)
* [WebAssembly](#webassembly)
* [WebAudio](#webaudio)
* [WebGL](#webgl)
* [Webpack](#webpack)

##### 2D Graphics
* [Phaser 2 Sandbox](https://phaser.io/sandbox)
##### Angular
* [@Self or @Optional @Host? The visual guide to Angular DI decorators](https://medium.com/frontend-coach/self-or-optional-host-the-visual-guide-to-angular-di-decorators-73fbbb5c8658)
##### Codebase
* [Under the hood: React](https://bogdan-lyashenko.github.io/Under-the-hood-ReactJS/)
##### Event loop
* [Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
* [Philip Roberts: What the heck is the event loop anyway? | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
##### Fiber
* [Brief Overview of React Fiber - A Tutorial on its Features and Advantages](https://www.youtube.com/watch?v=0fUmOPQUv-Q)
* [Lin Clark - A Cartoon Intro to Fiber - React Conf 2017](https://www.youtube.com/watch?v=ZCuYPiUIONs)
##### Flex
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Ninja](https://flexbox.ninja/)
* [Flexbox: The Animated Tutorial](https://medium.freecodecamp.org/flexbox-the-animated-tutorial-263e7d8864e5)
##### Flux
* [A cartoon intro to Flux](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207)
##### Functional Programming
* [Javascript Functor, Applicative, Monads in pictures](https://medium.com/@tzehsiang/javascript-functor-applicative-monads-in-pictures-b567c6415221)
* [Learn Ramda](https://davesnx.github.io/learn-ramda/)
##### Gamedev
* [A-STAR Pathfinding AI for HTML5 Canvas Games](http://buildnewgames.com/astar/)
* [Broad Phase Collision Detection Using Spatial Partitioning](http://buildnewgames.com/broad-phase-collision-detection/)
* [Particle Systems From the Ground Up](http://buildnewgames.com/particle-systems/)
##### General programming / JavaScript 
* [Bubbling and Capturing in JavaScript](https://www.youtube.com/watch?v=3gNLqmqVWHo)
* [CodeAnalogies Blog - Visual explanations of HTML, CSS and JavaScript concepts](https://blog.codeanalogies.com/)
* [Dev Doodles](https://www.instagram.com/dev_doodles/)
* [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
* [How to Remove Array Duplicates in ES6](https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c)
* [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
* [Javascript (ES6) Generators — Part I: Understanding Generators](https://medium.com/@hidace/javascript-es6-generators-part-i-understanding-generators-93dea22bf1b)
* [JavaScript Array Explorer](https://sdras.github.io/array-explorer/)
* [JavaScript Getter-Setter Pyramid](https://staltz.com/javascript-getter-setter-pyramid.html)
* [Map, Filter and Reduce – Animated](https://medium.com/@js_tut/map-filter-and-reduce-animated-7fe391a35a47)
* [The 2018 Web Developer Roadmap](https://codeburst.io/the-2018-web-developer-roadmap-826b1b806e8d)
* [Understanding the Almighty Reducer](https://css-tricks.com/understanding-the-almighty-reducer/)
##### Grid
* [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid — The Beginner’s Guide](https://medium.freecodecamp.org/css-grid-the-beginners-guide-45998e6f6b8)
* [Grid by Example](https://gridbyexample.com/examples/)
##### HTML/CSS
* [A Nerd’s Guide to Color on the Web](https://css-tricks.com/nerds-guide-color-web/)
* [Explaining CSS Specificity — Estelle Weyl — Frontend Masters](https://www.youtube.com/watch?v=SLC83iesr60)
* [Guidelines - Material Design](https://material.io/design/guidelines-overview/)
##### Immutable.js
* [Immutable.js Tutorial - The Advantages of Using Immutable.js](https://www.youtube.com/watch?v=cHKG4b2XNig)
* [Using Immutable js With React](https://www.youtube.com/watch?v=D70Bk_PWmEE)
##### JavaScript Engines
* [JavaScript engine fundamentals: optimizing prototypes](https://mathiasbynens.be/notes/prototypes)
* [JavaScript engine fundamentals: Shapes and Inline Caches](https://mathiasbynens.be/notes/shapes-ics)
* [V8 internals for JS developers - Mathias Bynens | JSHeroes 2018](https://www.youtube.com/watch?v=5UZzT_hgsl0)
##### Node.js
* [You Got This! Zine - Making web apps with Node.js](https://glitch.com/you-got-this/)
##### React
* [Lifecycle Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [Lin Clark: A cartoon guide to performance in React - JSConf Iceland 2016](https://www.youtube.com/watch?v=NGxVLnJKhP8)
* [What WebAssembly means for React - Lin Clark aka @linclark at @ReactEurope 2017](https://www.youtube.com/watch?v=3GHJ4cbxsVQ)
* [You Got This! Zine - Making web apps with React.js](https://glitch.com/you-got-this/2)
##### Reactive programming
* [Interactive diagrams of Rx Observables](http://rxmarbles.com/)
* [JavaScript Reactivity Explained Visually](https://www.youtube.com/watch?v=7Cjb7Xj8fEI)
* [Learn RxJS and Reactive Programming principles](https://reactive.how/)
* [Learn to combine RxJs sequences with super intuitive interactive diagrams](https://blog.angularindepth.com/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams-20fce8e6511)
* [RxJS Operators for Dummies: forkJoin, zip, combineLatest, withLatestFrom](https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom)
* [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
* [What is an Observable?](https://www.youtube.com/watch?v=XbOuCBuQepI)
##### Redux
* [A cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
* [Docs need one or more diagrams (Redux issue)](https://github.com/reduxjs/redux/issues/653#issuecomment-216844781)
* [Introduction to Redux](https://www.youtube.com/watch?v=ky4CzcSt2tQ)
* [Redux. From twitter hype to production](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/23)
##### Regular expressions
* [Online regex tester and debugger: PHP, PCRE, Python, Golang and JavaScript](https://regex101.com/)
* [Regexly](https://regexly.chipto.io/)
##### Relay
* [A cartoon intro to Facebook's Relay](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5)
##### Rx.js 
* [Rx Visualizer](https://rxviz.com/)
##### Service Workers
* [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers/)
* [The Service Worker Lifecycle](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle)
##### Tools
##### AST
* [AST Explorer](https://astexplorer.net/)
* [JavaScript AST Visualizer](http://resources.jointjs.com/demos/javascript-ast)
##### Code execution
* [JavaScript Tutor - Visualize JavaScript code execution to learn JavaScript online](http://www.pythontutor.com/javascript.html#mode=edit) 
##### Dependencies / Codebase / Bundling
* [Madge - Create graphs from your CommonJS, AMD or ES6 module dependencies](https://github.com/pahen/madge)
* [Webpack Visualizer](https://chrisbateman.github.io/webpack-visualizer/)
##### GraphQL
* [GraphQL editor - visual node editor for GraphQL](https://github.com/slothking-online/graphql-editor)
##### HTML/CSS
* [CSS Grid Generator](https://cssgrid-generator.netlify.com/)
* [Interactive Flex Editor](http://www.csstutorial.org/flex-both.html)
##### Project Understanding
* [Project Explorer](https://sdras.github.io/project-explorer-site/)
##### Virtual DOM
* [React and the Virtual DOM](https://www.youtube.com/watch?v=BYbgopx44vo)
* [Virtual DOM and ReactJS - How ReactJS works - Tamil Tutorials](https://www.youtube.com/watch?v=S-m8axqtUDE)
##### Vue
* [Intro to Vue: Communicating Events](https://www.youtube.com/watch?v=EYyHIMmilUY)
* [Intro to Vue.js: Computed Properties](https://www.youtube.com/watch?v=NK-Cy4IHwI4)
* [Intro to Vue.js: The Vue Instance](https://www.youtube.com/watch?v=DyndGu0fPSE)
* [Lifecycle Diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
##### Web protocols
* [How does HTTPS provide Encryption? | The Curious Engineer](https://www.youtube.com/watch?v=w0QbnxKRD0w)
* [How Http/2 works | Http/2 Optimize Website Performance](https://www.youtube.com/watch?v=RjnNaKLfjEU)
* [HTTP2 and Front-End Performance with Mark Nottingham](https://www.youtube.com/watch?v=GIDXISQs67w)
* [SSL TLS HTTPS process explained in 7 minutes](https://www.youtube.com/watch?v=4nGrOpo0Cuc)
* [What is HTTP2?](https://www.youtube.com/watch?v=WfA1uDAgXf8)
##### WebAssembly
* [Lin Clark: A Cartoon Intro to WebAssembly | JSConf EU 2017](https://www.youtube.com/watch?v=HktWin_LPf4)
* [Online Module Summit Part 8: Lin Clark on Web Assembly and ESModules](https://www.youtube.com/watch?v=cKRg6H5_aRE)
* [WebAssembly ES module integration](https://www.youtube.com/watch?v=qR_b5gajwug)
##### WebAudio 
* [Basic concepts behind Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API)
* [JavaScript Systems Music](https://teropa.info/blog/2016/07/28/javascript-systems-music.html)
##### WebGL
* [BabylonJS Sandbox - View glTF, glb, obj and babylon files](https://sandbox.babylonjs.com/)
* [Raw WebGL](https://alain.xyz/blog/raw-webgl)
* [three.js / editor](https://threejs.org/editor/)
* [three.js playGnd](http://threejsplaygnd.brangerbriz.net/)
* [WebGL How It Works](https://webglfundamentals.org/webgl/lessons/webgl-how-it-works.html)
* [WebGL interactive reminder by Mark Green](http://pixelatron.com/coding/webgl/index.html)
* [WebGL State diagram](https://webglfundamentals.org/webgl/lessons/resources/webgl-state-diagram.html)
##### Webpack
* [Front End Center — Webpack from First Principles](https://www.youtube.com/watch?v=WQue1AN93YU)
* [Sean Larkin: Webpack: The Core Concepts - NEJS Conf 2016](https://www.youtube.com/watch?v=AZPYL30ozCY)
* [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
* [Webpack & The Hot Module Replacement](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07)

**[⬆ Back to Top](#main-contents)**

[Source](https://github.com/hex13/javascript-visual-explanations)

[Back](./../README.md)