
import React, { useState, useEffect } from 'react';
import { Text, View,
    Image,
    StyleSheet,
    Alert,

} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { decrease, getTicketTotal, increase } from '../redux/Ticket';
// <-- import styles to be used

function AvaliableTickets({ ticket }) {
    const [openButton ,setOpenButton ]=useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTicketTotal());
    }, [ticket]);
    const { id, title, price, img, amount  } = ticket
    console.log(ticket.ticket)
    return (
         <View>
             <View>
                {ticket.length != 0 ? (
                   
                        <View key={index} style={styles.productView}>
                             <View style={styles.LeftTicket}>
                                <View style={styles.IconWrapper}>
                                    <MaterialCommunityIcons
                                        name="ticket"
                                        size={22}
                                        color="#900" />
                                </View>
                                <Text style={styles.productTitle}>{title}</Text>
                            </View>
                         <View style={styles.productRightView}>
                                {openButton?(
                                    <View>
                                        {amount !== 0 ? (
                                            <View>
                                                {/* <Text style={styles.productPriceText}>{`${price * amount}`}</Text>
                                                <Text style={styles.productPriceText}>{`${price * amount}`}</Text> */}
                                                    </View>) : (<View><Text>null</Text></View>)  }
                                        <View style={styles.productItemCounterView}>
                                            <TouchableOpacity onPress={() => { amount > 0 && dispatch(decrease(id))}}>
                                                 <MaterialCommunityIcons
                                                    name="minus-thick"
                                                    size={22}
                                                />
                                            </TouchableOpacity>
                                               <Text style={styles.counterValue}>{amount}</Text> 
                                            <TouchableOpacity
                                                onPress={() => {
                                                    dispatch(increase(id))
                                                }}
                                            > 
                                            <MaterialCommunityIcons
                                                    name="plus-thick"
                                                    size={22}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                      </View>)
                                    :
                                    (<TouchableOpacity onPress={() => {
                                    
                                        setOpenButton(false)
                                        console.log(openButton)}
                                  
                                    }>
                                       <View><Text>Button</Text></View>
                                    </TouchableOpacity>)}
                        </View>
                        </View>
                 
                ) : (<View>
                    <Text>no ticket</Text>
                </View>)
                }

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    LeftTicket: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    cartTitleView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    IconWrapper: {
        alignItems: "center",
        justifyContent: 'center',
        marginRight: 10,
        height: 35,
        width: 35,
        backgroundColor: 'orange',
        borderRadius: 50
    },
    cartTitle: {
        fontSize: 26,
        fontWeight: '700',
        marginLeft: 10,
    },
    productView: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 8,
        shadowColor: '#333',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        borderRadius: 5,
        marginTop: 5,
        marginHorizontal: 20,
    },
    productImage: {
        width: 60,
        height: 60,
        alignSelf: 'center',
    },
    productMiddleView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: '500',
    },
    productCompanyTitle: {
        fontSize: 16,
        fontWeight: '300',
    },
    productRightView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productItemCounterView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 4,
    },
    counterValue: {
        fontSize: 20,
        fontWeight: '500',
    },
    productPriceText: {
        alignSelf: 'flex-end',
        paddingRight: 10,
        fontSize: 20,
        fontWeight: '700',
    },
    toggleCounterButton: {
        paddingHorizontal: 10,
    },

});
export default AvaliableTickets
