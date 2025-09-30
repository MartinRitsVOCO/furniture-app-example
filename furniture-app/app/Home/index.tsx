import { StyleSheet, StatusBar, View, Text } from "react-native"
import { Search, HomeFill, Marker, Person } from "@/components/ui/svg"
import ProductButton from "@/components/ui/ProductButton"
import Colors from "@/constants/colors"
import Typography from "@/constants/typography"

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: Colors.white,
    },
    topMenu : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '90%',
        gap: 5
    },
    searchTextContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchIcon: {
      position: 'absolute',
      left: 15
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: '90%',
        gap: 5
    },
})

const Home = () => {
  return (
    <View style={styles.mainView}>
        <StatusBar
            hidden={false}
            barStyle={"dark-content"}
            backgroundColor={"transparent"}
            translucent={true}
        />
        <View style={styles.topMenu}>
          <View style={styles.searchContainer}>
            <Search style={styles.searchIcon}/>
            <View style={styles.searchTextContainer}>
              <Text style={Typography.topBar}>Find All You Need</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <ProductButton category={"popular"} active={true}/>
            <ProductButton category={"chair"} active={false}/>
            <ProductButton category={"table"} active={false}/>
            <ProductButton category={"armchair"} active={false}/>
            <ProductButton category={"bed"} active={false}/>
          </View>
        </View>
    </View>
  )
}
export default Home