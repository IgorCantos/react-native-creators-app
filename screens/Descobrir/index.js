import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UserPost from '../../components/UserPost';
import styles from './styles';

export default function Descobrir({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.newPostsCounter}>
                        8.354 novos posts
                    </Text>
                </View>
                <TouchableOpacity 
                    style={styles.filterBtn}
                    onPress={() => navigation.navigate('Filtrar')}
                >
                    <MaterialIcons name="filter-list" size={26} color="#5887F9" />
                    <Text style={styles.filterBtnText}>
                        Filtrar
                    </Text>
                </TouchableOpacity>
            </View>
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0003/0003-profile-image.png')}
                userName="Flakes Power"
                profileCategory="Games."
                postContent={require('../../assets/images/users-posts/0003/0003-post-content.png')}
                postTitle="ENCONTREI TODAS AS NOVAS ARMAS MÍTICAS DA TEMPORADA 3 DO FORTNITE"
                postCategory="Games"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0001/0001-profile-image.png')}
                userName="One of Those Days"
                profileCategory="Ilustração, Humor e Dia a Dia."
                postContent={require('../../assets/images/users-posts/0001/0001-post-content.png')}
                postTitle="Encontrei todas as novas armas míticas da temporada 3 do fortnite"
                postCategory="Ilustração"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0002/0002-profile-image.png')}
                userName="Coisa de Nerd"
                profileCategory="Tecnologia e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0002/0002-post-content.png')}
                postTitle="OLHA O QUE A QUARENTENA FAZ! - Hora de Pôr Café (Parte 64)"
                postCategory="Nerd"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0004/0004-profile-image.png')}
                userName="Canal Nostalgia"
                profileCategory="Ciência, História e Cultura Nerd."
                postContent={require('../../assets/images/users-posts/0004/0004-post-content.png')}
                postTitle="A origem do universo | Teoria do BIG BANG - Nostalgia Ciência"
                postCategory="Ciência"
            />
            <UserPost 
                profileImg={require('../../assets/images/users-posts/0005/0005-profile-image.png')}
                userName="KamiKat"
                profileCategory="Games."
                postContent={require('../../assets/images/users-posts/0005/0005-post-content.png')}
                postTitle="DERRETENDO O TIME INIMIGO INTEIRO COM MALZAHAR | Kami"
                postCategory="Games"
            />
        </ScrollView>
    )
}