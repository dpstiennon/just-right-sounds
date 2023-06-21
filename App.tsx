import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ListPage from './components/pages/ListPage';

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <SafeAreaView>
                <ListPage/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
