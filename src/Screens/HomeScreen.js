import React, { useEffect } from 'react'
import { View, Text, Button, SafeAreaView, ScrollView } from 'react-native'
import Header from '../Common/Header'
import Welcome from '../Components/UserInfo/Welcome'
import Shoutout from '../Components/UserInfo/Shoutout'
import DashBoardMenu from '../Components/DashBoardMenu/DashBoardMenu'
import { Heading } from 'native-base';
import RecentActivity from '../Components/RecentActivity/RecentActivity'
import LeaderCorner from '../Components/LeadersCorner/LeaderCorner'
import Facts from '../Components/Facts/Facts'

export default function HomeScreen({ navigation, route }) {
    useEffect(() => {

    }, [])

    return (
        <ScrollView>
            <View>
                <View>
                    <Shoutout />
                    <Welcome />
                    <DashBoardMenu />
                    <Heading color={"black"} px="4" size="md">Recent Activities</Heading>
                    <RecentActivity />
                    <Heading color={"black"} px="4" size="md">Leaders Corner</Heading>
                    <LeaderCorner />
                    <Facts />
                </View>
            </View>
        </ScrollView>


    )
}
