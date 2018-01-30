!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["aws-appsync-js"]=n():e["aws-appsync-js"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.authMode={API_KEY_MODE:"API_KEY_MODE",AWS_IAM:"AWS_IAM",AMAZON_COGNITO_USER_POOLS:"AMAZON_COGNITO_USER_POOLS"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.authMode=void 0;var r=t(0);Object.defineProperty(n,"authMode",{enumerable:!0,get:function(){return r.authMode}});var i=t(2),u=function(e){return e&&e.__esModule?e:{default:e}}(i);n.default=u.default},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(0),o=t(3),a=function(e){return e&&e.__esModule?e:{default:e}}(o),p=function(){function e(n){var t=n.auth;if(r(this,e),!t.apiUrl)throw new Error("Correct apiUrl should be provided");switch(this.auth={},t.mode){case u.authMode.API_KEY_MODE:if(!t.apiKey)throw new Error("Correct apiKey should be provided for API_KEY auth mode");this.auth.apiUrl=t.apiUrl,this.auth.mode=t.mode,this.auth.apiKey=t.apiKey;break;default:throw new Error("Correct auth mode is not provided")}this.queryBuilder=new a.default({apiKey:this.auth.apiKey,apiUrl:this.auth.apiUrl})}return i(e,[{key:"request",value:function(e,n){return this.queryBuilder.request(e,n)}}]),e}();n.default=p},function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(4),o=function(){function e(n){r(this,e);var t=n.apiKey,i=n.apiUrl;this.apiKey=t,this.apiUrl=i}return i(e,[{key:"request",value:function(e,n){return this.fetch(apiUrl,{method:"POST",body:JSON.stringify({query:e,variables:n}),headers:{"x-api-key":this.apiKey}}).then(function(e){return e.json()})}},{key:"introspect",value:function(){return this.request(u.INTROSPECTION_QUERY)}}]),e}();n.default=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.INTROSPECTION_QUERY="\n  query IntrospectionQuery {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      subscriptionType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"}])});