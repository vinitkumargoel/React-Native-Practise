import {
    AsyncStorage
} from "react-native"

export const setItem = async (title, description) => {
    try {
        let notices = JSON.parse(await AsyncStorage.getItem('notices') || []);
        notices.push({
            title: title,
            description: description,
            addedDate: new Date()
        });
        await AsyncStorage.setItem('notices', JSON.stringify(notices));
    } catch (error) {
        await AsyncStorage.setItem('notices', JSON.stringify([]));
    };
};