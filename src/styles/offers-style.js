import { StyleSheet } from 'react-native'
const css = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flex: 1
  },
  featured: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginTop: 50
  },
  featuredImage: {
    marginTop: 50,
    width: 330,
    height: 200,
    borderRadius: 20,
  },
  featuredText: {
    fontSize: 50,
    marginTop: 120,
    backgroundColor: 'transparent',
    color: '#fff',
    fontWeight: '600'
  },
  textOfDescription: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 20
  },
  list_food: {
    flex: 10
  },
  list_food_item: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  list_food_item_image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 8
  },
  textOfDescriptionOfImage: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'transparent',
    marginTop: 128
  }
})

export default css
