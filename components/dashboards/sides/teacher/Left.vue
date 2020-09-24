<template>
    <div>
        <Table :title="'Best performing students'" :items="students" :keys="[ 'first_name', 'last_name', 'performance' ]" :unit="'%'" />
        <Table :title="'Students Leadersboard'" :items="leadersboard" :keys="[ 'first_name', 'last_name', 'score' ]" :unit="'pkt'" :max="5" />
        <Table :title="'Champion Team'" :items="teams" :keys="[ 'name', 'points' ]" :unit="'pkt'" />
    </div>
</template>
<script>
import Table from "@/components/tables/Table"
export default {
    data(){
        return {
            loadingLeadersoad: true,
            leadersboard: [],
            students: [
                { first_name: "Tony", last_name: "Leader", performance: "95", points: 1899, champion: false },
                { first_name: "Benjamin", last_name: "Davids", performance: "75", points: 1204, champion: false },
                { first_name: "Jane",last_name: "Nany", performance: "35", points: 954, champion: false },
                { first_name: "Johny", last_name: "Jody", performance: "15", points: 819, champion: false },
            ],
            teams: [
                { name: "Red dragon", points: 1289 },
                { name: "Blue Whales", points: 1123 },
                { name: "Dark Phoenix", points: 985 },
            ],
        }
    },
    methods:{
        async fetchLeadersBoard(){
            this.leadersboard = await this.$tacoClient.leadersboard();
        }
    },
    async mounted(){
        try {
            await this.fetchLeadersBoard();
        } catch (error) {
            throw error
        }
    }
}
</script>