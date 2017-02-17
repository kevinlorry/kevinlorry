<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input id="sousuo" v-model="newItem" v-on:keyup.enter="addNew" placeholder="whats needs to be done?">
    <ul id="top">
     <li v-if="(isred=='active'&&item.over==true)||(isred=='all')||(isred=='completed'&&item.over==false)" v-for="item in items" :class="{over:item.over}"  class="li1">
       <input type="checkbox" class="box" @click="overed(item)" >  {{item.label}} <a href="#" id="delete" @click="removeitem(item)" >x</a>
      </li>
      <li  :class="{leddd:isleddd}" class="ledd">
          {{count}} item left
      <a v-for="item1 in item1s" href="#" class="cli" :class="{red:isred==item1}" @click="toggle(item1)" >{{item1}}</a>
      <a href="#" class="clear" v-if="(isover==true)" @click="clearis()" > Clear completed</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'this is a todo list ',
      items:[],
      item1s:[],
      newItem:"",
      isleddd:true,
      item1s:['all','active','completed'],
      isred:"all",
      item2:['ALL','Active','Completed'],
      a:true,
      isover:false,
    }
  },
  computed:{
    count:function(){
      return this.items.filter(o=>{
        if (!o.over) 
          return o
      }).length

    }
  },
  methods:{
    overed:function (item){
     item.over=!item.over
     this.isover=item.over
    },
    addNew:function(){
      this.isleddd=false 
      if(!!this.newItem){
        this.items.push({
          label:this.newItem,
          over:false
        });
      }
      this.newItem=null
    },
    toggle:function(item1){
    this.isred=item1
    },
    clearis(){
     this.items=this.items.filter(i=>{
        if (!i.over)
          return i
      })
    },
    removeitem: function (item) {
      this.items.splice(this.items.indexOf(item), 1)
    },
  }
}

</script>

<style>
*{
  padding:0px;
  margin:0px;
}

#app{
  width:500px;
  margin:0 auto;
}
#sousuo{
  outline:medium;
  width: 480px;
  height: 40px;
  padding-left: 20px;
  font-size: 20px;
  border:1px solid #ededed;
}

#top{
  margin-top: 0px;
  padding: 0px;
  width:500px;
  font-size: 20px;
}
#top li{
  list-style-type: none;
  width:480px;
  height: 40px; 
  border:1px solid #ededed;
  line-height: 40px;
}
.li1{
  padding-left: 20px;
}
.li1:hover #delete{
  display: block;
}
.over{
  text-decoration:line-through;
  color:grey;
}
#delete{
  display: inline-block;
  float:right;
  padding-right: 10px;
  text-decoration: none;
  display: none;
}



.ledd{
/*  text-align:left;*/
  font-size: 15px;
  list-style-type: none;
 
  width:490px;
  height: 40px;
  background:white;
  padding-left: 20px;
  border: 1px solid #ededed;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.leddd{
   display:none;
}
.cli{
  height: 25px;
  line-height: 25px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  border: 1px solid white;
  text-decoration:none;
  border-radius: 3px;
  padding:0px 2px ;
}
.red{
  border-color: red;
}
.clear{
  padding-left: 20px;
  text-decoration:none;
}
.clear:hover{
  text-decoration:underline;
}
</style>
