<template>
    <div>
        <Table :title="'Monthly Leadersboard'" :items="students" :keys="[ 'name', 'points' ]" :unit="'%'" />
        <Table :title="'Champion Team'" :items="teams" :keys="[ 'name', 'points' ]" :unit="'pkt'" />
    </div>
</template>
<script>
import Table from "@/components/tables/Table"
export default {
    data(){
        return {
            students: [
                { name: "Tony Leader", performance: "95", points: 1899, champion: false },
                { name: "Benjamin Davids", performance: "75", points: 1204, champion: false },
                { name: "Jane Nany", performance: "35", points: 954, champion: false },
                { name: "Johny Jody", performance: "15", points: 819, champion: false },
            ],
            teams: [
                { name: "Red dragon", points: 1289 },
                { name: "Blue Whales", points: 1123 },
                { name: "Dark Phoenix", points: 985 },
            ],
        }
    }
}
</script>