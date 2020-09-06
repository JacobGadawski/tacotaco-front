<template>
      <v-navigation-drawer
        v-model="rightDrawer"
        :right="true"
        temporary
        fixed
        :width="350"
      >
        <div class="account-container d-flex flex-column text-center">
            <div class="account-title">
                <h3>My account details</h3>
            </div>
            <div class="account-image">
                <img src="~/assets/img/person.svg" alt="" />
            </div>
            <div class="account-name" >
                <p>{{ user.name }}</p>
            </div>
            <div class="account-email">
                <p>{{ user.email }}</p>
            </div>
            <div class="account-school d-flex">
                <p>School Name</p>
                <v-spacer />
                <p>{{ user.school }}</p>
            </div>
            <div class="account-grade d-flex">
                <p>School Name</p>
                <v-spacer />
                <p>{{ user.school }}</p>
            </div>
            <!-- <v-data-table
                :items="test"
                item-key="school"
                class="elevation-1"
                :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus'
                }"
            ></v-data-table> -->
        </div>
      </v-navigation-drawer>
</template>
<script>
export default {
    props: {
        rightDrawer: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            user: {
                name: "Thomas Brooks",
                email: "thomas.brooks@gmail.com",
                school: "BETU Secondary School",
                grade: 6,
                avg_grade: 4.2,
                tutor: "Ms. Jane Anderson",
                avg_focus_rate: 87,
                attendance: 93,
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget dui at felis posuere cursus. Sed id iaculis lorem, sollicitudin lobortis lorem. Fusce porta pulvinar tortor vel pulvinar. Donec ut luctus mauris, suscipit tincidunt dolor." 
            }
        }
    },
    // computed: {
    //     test(){
    //         return [
    //             {"School Name": this.user.school},
    //             {"Grade": this.user.grade},
    //             {"Average Grades": this.user.avg_grade},
    //             {"Personal Tutor": this.user.tutor},
    //             {"Average focus rate": this.user.avg_focus_rate},
    //             {"Attendance": this.user.attendance }
    //         ]
    //     }
    // }
    
}
</script>

<style scoped>
.account-container{
    padding: 30px;
}
.account-container div{
    margin: 5px;
}
.account-container .account-image img{
    max-width: 85px;
}
.account-container .account-email{
    margin: 0;
    margin-top: -10px;
}
</style>