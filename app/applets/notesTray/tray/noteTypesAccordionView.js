define(["backbone","marionette","underscore","app/applets/notesTray/tray/noteTypeView","app/applets/notesTray/tray/notesCollectionHandler"],function(e,t,n,o,i){"use strict";var l=e.Model.extend({}),s=ADK.Messaging.getChannel("notesTray"),a=(e.Collection.extend({model:l}),e.Model.extend({})),r=(e.Collection.extend({model:a}),""),d="",c=e.Marionette.CollectionView.extend({id:"notes-accordion",className:"accordion-container panel-group small",childView:o,initialize:function(){var e=this;this.collection=i.getModel(),this.listenTo(s,"notestray:opening",function(){i.initNotes()}),this.listenTo(s,"notes:retrieved",function(t){if(r){var n=e.$('.note-group-list[data-group="'+d+'"] li[data-uid="'+r+'"]');n.length>0?e.doSelect(r,n):(r="",d="")}})},events:{"click li":"selectNote","keyup li":"selectNote"},selectNote:function(e){e.preventDefault();var t=$(e.currentTarget),n=t.data("uid");this.doSelect(n,t)},doSelect:function(e,t){var n=this.$(".list-item-selected");if(n.size()>0){var o=n.data("uid"),l=n.closest(".note-group-list").data("group"),s=i.getModelByUid(o,l);n.removeClass("list-item-selected"),ADK.Messaging.getChannel("notesTray").trigger("notes:deselected",s)}var a=t.closest(".note-group-list").data("group"),c=i.getModelByUid(e,a);c&&(t.addClass("list-item-selected"),ADK.Messaging.getChannel("notesTray").trigger("notes:selected",c)),r=e,d=a}});return c});