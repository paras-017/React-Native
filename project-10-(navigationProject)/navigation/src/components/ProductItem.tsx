import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

//PropsWithChildren- actually stops you from passing anything which looks like a string but actually a particular data type that is being passed you can always avoid this but in case you want a hundred percent surety that whatever the data you are passing in this component that should be of some particular type
type ProductItemProps = PropsWithChildren<{
    product: Product,
}>

//we need product  but we cannot use them directly with type any so we need to define there type(as you can see above -->type ProductItemProps)
const ProductItem = ({product}:ProductItemProps) => {
  return (
    <View style={styles.container}>
      <Image 
      source={{uri: product.imageUrl}}
      style={styles.image}
      />

      <View>
        <Text style={styles.name}>{product.name}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{product.rating} ★</Text>
            </View>
            <Text style={styles.ratingCount}>

    {/*The toLocaleString method is a built-in JavaScript function that is available on number, date, and array objects. It is used to convert  a value to a localized string representation based on the specified locale and formatting options. 
      const number = 12345.6789;
      console.log(number.toLocaleString()); // Prints "12,345.679" (using default locale) */}
                ({product.ratingCount.toLocaleString()})
            </Text>
            </View>
            
            <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    %{product.offerPercentage} off
                </Text>
        </View>
      </View>

    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
      margin: 8,
      flexDirection: 'row',
    },
    rowContainer: {
      flexDirection: 'row',
    },
    image: {
      width: 90,
      height: 150,
      resizeMode: 'contain',
  
      marginRight: 12,
    },
    name: {
      marginBottom: 4,
  
      fontSize: 15,
      fontWeight: '500',
    },
    ratingContainer: {
      marginBottom: 8,
    },
    priceContainer: {
      marginBottom: 12,
    },
    rating: {
      borderRadius: 4,
      paddingHorizontal: 8,
      justifyContent: 'center',
      backgroundColor: '#008c00',
  
      marginRight: 4,
    },
    ratingText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
    },
    ratingCount: {
      color: '#878787',
    },
    originalPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
  
      color: 'rgba(0, 0, 0, 0.5)',
      textDecorationLine: 'line-through',
    },
    discountPrice: {
      fontSize: 18,
      marginRight: 4,
      fontWeight: '600',
  
      color: '#000000',
    },
    offerPercentage: {
      fontSize: 17,
      fontWeight: '600',
      color: '#4bb550',
    },
  });