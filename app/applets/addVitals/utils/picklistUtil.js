define(["backbone"],function(e){var n={getQualifier:function(e,n,a){var i=[],r=_.findWhere(e,{name:n});if(r&&r.categories){var t=_.findWhere(r.categories,{categoryName:a});t.qualifiers&&_.each(t.qualifiers,function(e){i.push({label:e.name,value:e.ien})})}return i},getIENMap:function(e){var n={};return _.each(e,function(e){n[e.name]=e.ien}),n}};return n});