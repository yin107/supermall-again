<!-- views/detail/childcomponents/DetailParams -->
<template>
  <div class="params-info">
 <table class="table1">
    <tr v-for="(item,index) in shopparams.rule.tables[0]" :key="index">
        <td v-for="(item1,index1) in item" :key="index1" class="widthtd1">{{item1}}</td>
    </tr>
 </table>
 <table class="table2">
    <tr v-for="(item,index) in shopparams.info" :key="index">
    <td class="tab-key">{{item.key}}</td><td class="tab-value">{{item.value}}</td>
</tr>
 </table>
  </div>
</template>

<script>
export default {
    name: 'DetailParams',
    props: {
        shopparams: {
            type: Object,
            default() {
                return {}
        } 
        }
      
}
}
</script>

<style scoped>
.table1{
width:100%;
color:grey;
border-collapse: collapse;
border-bottom:2px solid rgb(183,183,183)
}
.table1 tr{
    height:50px;
    text-align: center;
    line-height: 50px;
    border-bottom:1px solid rgb(183,183,183)
}
.table2{
    width:100%;
color:grey;
border-collapse: collapse;
border-bottom:2px solid rgb(183,183,183)
}
.table2 tr{
    height:50px;
    border-bottom:1px solid rgb(183,183,183)
}
.tab-key{
    width:82px;
    text-align: center;
}
.tab-value{
    width:calc(100% - 30px);
    word-wrap: break-word;
    text-align: left;
    color:rgb(251, 115, 138)
}
.widthtd1{
    width:30px;
    word-wrap: break-word;
}
</style>