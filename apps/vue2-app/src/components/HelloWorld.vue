<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ar-flex-box justify="center">
            <ar-segmented
                :key="segmented.length"
                size="default"
                :value="input"
                :options.prop="segmented"
                @input="input = $event.target.value"
            ></ar-segmented>
            <el-button @click="add" type="primary">Add</el-button>
            <el-input v-model="input" style="width: 200px"></el-input>
        </ar-flex-box>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    private input = 'A';
    private segmented = ['A', 'B'];
    private add = () => {
        this.segmented.push('C');
    };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
