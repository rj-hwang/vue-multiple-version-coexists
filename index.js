requirejs([
  "https://cdn.jsdelivr.net/npm/vue@2.7.13/dist/vue.min.js",
  "https://cdn.jsdelivr.net/npm/vue@1.0.28/dist/vue.min.js"
], function(Vue2, Vue1) {
  console.log("Vue2=" + Vue2);
  console.log("Vue1=" + Vue1);

  new Vue2({
    el: "#vue2",
    data: {
      phases: "init",
      count: 0
    },
    beforeCreate: function(){
      console.log("vue2: beforeCreate")
      this.phases += " > beforeCreate";
    },
    created: function(){
      console.log("vue2: created")
      this.phases += " > created";
    },
    beforeMount: function(){
      console.log("vue2: beforeMount")
      this.phases += "> beforeMount";
    },
    mounted: function(){
      console.log("vue2: mounted")
      this.phases += " > mounted";
    },
    beforeUpdate: function(){
      console.log("vue2: beforeUpdate")
      this.phases += " > beforeUpdate";
    },
    updated: function(){
      console.log("vue2: updated")
    },
    beforeUpdate: function(){
      console.log("vue2: beforeUpdate")
    },
    beforeDestroy: function(){
      this.phases += " > beforeDestroy";
      console.log("vue2: beforeDestroy")
    },
    destroyed: function(){
      this.phases += " > destroyed";
      console.log("vue2: destroyed")
    },
    methods: {
      destroyMe: function(){
        this.$destroy()
      }
    }
  });

  new Vue1({
    el: "#vue1",
    data: {
      phases: "init",
      count: 0
    },
    created: function(){
      console.log("vue1: created")
      this.phases += " > created";
    },
    beforeCompile: function(){
      console.log("vue1: beforeCompile")
      this.phases += " > beforeCompile";
    },
    ready: function(){
      console.log("vue1: ready")
      this.phases += " > ready";
    },
    beforeDestroy: function(){
      console.log("vue1: beforeDestroy")
      this.phases += " > beforeDestroy";
    },
    destroyed: function(){
      console.log("vue1: destroyed")
      this.phases += " > destroyed";
    },
    methods: {
      destroyMe: function(){
        this.$destroy()
      }
    }
  });

  document.getElementById("vue").innerText = 'window["Vue"]=' + window["Vue"];
});