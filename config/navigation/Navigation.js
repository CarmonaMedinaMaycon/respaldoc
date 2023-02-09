import NavigationContainer from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ProfileStack from "../stack/ProfileStack";
import RentStack from "../stack/RentStack";
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigation 
        initialRouteName="profile"
        screenOptions={({route}) =>({
            tabBarIcon:({color}) => screenOptions(route, color),
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor:"gray",
            headerShow: false
        })}
        >
        <Tab.Screen
          name="profile"
          options={{ title: "Perfil" }}
          component={ProfileStack}
        />

        <Tab.Screen
          name="rent"
          options={{ title: "Renta de apartamentos" }}
          component={RentStack}
        />
      </Tab.Navigation>
    </NavigationContainer>
  );
}

const screenOptions = (route, color)=>{
    let iconName;
    switch (route.name) {
        case "profile":
            iconName = "account";
            break;
        case "rent":
            iconName="sofa"
            break;
    
        default:
            break;
    }
    return(
        <Icon type="material-community" name={iconName} size={22} color={color}/>
    )
}
