import { Pressable, View, Text, StyleSheet } from "react-native"
import { Star, Chair, Table, Sofa, Bed} from "@/components/ui/svg"
import Colors from "@/constants/colors"
import Typography from "@/constants/typography"

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5
    },
    activeIcon: {
        backgroundColor: Colors.black
    },
    inactiveIcon: {
        backgroundColor: Colors.inactiveButton
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const categories = {
    popular: {
        icon: <Star/>,
        text: "Popular"
    },
    chair:{
        icon: <Chair/>,
        text: "Chair"
    },
    table:{
        icon: <Table/>,
        text: "Table"
    },
    armchair:{
        icon: <Sofa/>,
        text: "Armchair"
    },
    bed:{
        icon: <Bed/>,
        text: "Bed"
    }
}
type Categories = keyof typeof categories;

const ProductButton = ({category, active} : {category: Categories, active: Boolean}) => {
  return (
    <Pressable style={styles.container}>
        <View style={[styles.iconContainer, active ? styles.activeIcon : styles.inactiveIcon]}>
            {categories[category].icon}
        </View>
        <Text style={Typography.smallButton}>
            {categories[category].text}
        </Text>
    </Pressable>
  )
}
export default ProductButton