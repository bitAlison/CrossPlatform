import React, { createContext, useState } from "react";
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View  } from 'react-native';
import * as MediaLibrary from 'expo-media-library';

export const MediaContext = createContext({});


function MediaProvider({ children }) {
    const [albums, setAlbums] = useState(null);
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    
    async function getAlbums() {
        if (permissionResponse.status !== 'granted') {
            await requestPermission();
        }
        const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
            includeSmartAlbums: true,
        });
        setAlbums(fetchedAlbums);
    }

    return (
        <MediaContext.Provider value={{albums, getAlbums}}>
            {children}
        </MediaContext.Provider>
    );
};


export default MediaProvider;