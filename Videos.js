import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'



function Videos({ item, navigation }){



function videosItem({ item }){
return (
<View style={styles.videos_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<View style={{flexDirection: 'row'}}>
<Text style={styles.user_name} numberOfLines={1}>{item.user_name}</Text>
{<View
    style={[styles.menu,{ backgroundColor: item.menu ? 'red' : 'black' }]}
   />}
</View>
<Image
    style={styles.uploaded_video}
    source={{uri: item.uploaded_video}}
    />
<View style={{flexDirection: 'row'}}>
{<View
    style={[styles.like,{ backgroundColor: item.like ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.comment,{ backgroundColor: item.comment ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.share,{ backgroundColor: item.share ? 'red' : 'black' }]}
   />}
{<View
    style={[styles.save,{ backgroundColor: item.save ? 'red' : 'black' }]}
   />}
<Text style={styles.video_label} numberOfLines={1}>{item.video_label}</Text>
</View>
<Text style={styles.video_description}>{item.video_description}</Text>
<Image
    style={styles.profile_image}
    source={{uri: item.profile_image}}
    />
</View>
)}

return (
<FlatList
    style={styles.videos}
    data={item}
    renderItem={videosItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
)}

export default Videos;

const styles = StyleSheet.create({
    "like": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "menu": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "save": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "share": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "comment": {
        "width": 30,
        "height": 30,
        "marginTop": 5,
        "borderRadius": 20
    },
    "user_name": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "user_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "video_label": {
        "flex": 1,
        "color": "hsl(274,100%,60%)",
        "fontSize": 15,
        "marginTop": 5,
        "fontWeight": "400",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    },
    "profile_image": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "uploaded_video": {
        "width": "100vw",
        "height": "100vw",
        "marginTop": 5
    },
    "video_description": {
        "fontSize": 12,
        "marginTop": 5,
        "fontWeight": "250",
        "marginHorizontal": 10,
        "paddingHorizontal": 2
    }
});