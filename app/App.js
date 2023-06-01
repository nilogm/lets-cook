import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, LogBox } from 'react-native';
import RecipeScroll from './src/components/RecipeScroll';
import Content from './src/components/Content';
import RecipePage from './src/components/RecipePage';
import TagInput from './src/components/TagInput';
import RecipeSearch from './src/components/RecipeSearch';

LogBox.ignoreAllLogs(true);

const Spacing = () => (
  <View style={{ height: 20, width: "100%" }} />
);

export default function App() {

  const DATA = [
    {
      title: "Weekly Recipes",
      mode: 1
    },
    {
      title: "All types of Cookies!",
      mode: 0
    },
    {
      title: "More Cookies???",
      mode: 0
    },
    {
      title: "More Cookies???",
      mode: 0
    },
    {
      title: "More Cookies???",
      mode: 0
    },

  ]


  const info = [
    {
      header: "Calorias: ",
      info: "134 kcal"
    },
    {
      header: "Tempo de preparo: ",
      info: "20 minutos"
    },
  ]

  const ingre = [
    {
      info: "5 folhas de alface",
    },
    {
      info: "2 tomates",
    },
    {
      info: "1/2 cebola",
    },
    {
      info: "Sal e azeite a gosto",
    },
  ]

  const modo = [
    {
      info: "Lave e corte o tomate em meias rodelas.",
    },
    {
      info: "Lave e pique a cebola em quadradinhos pequenos.",
    },
    {
      info: "Lave e rasgue as folhas de alface em tamanhos menores.",
    },
    {
      info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
    },
    {
      info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
    },
    {
      info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
    },
    {
      info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
    },
  ]

  // const headers = { 'Content-Type': 'application/json' }
  // fetch('https://api.spoonacular.com/recipes/findByIngredients?apiKey=ed5efa73e002400393a5034f3327b3c4&ingredients=apples,+flour,+sugar&number=2', { headers })
  //   .then(response => response.json())
  //   .then(data => this.setState({ totalReactPackages: data.total }));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RecipeSearch></RecipeSearch>

      {/* Search Page */}
      {/* <TagInput inputText="Ingredient"></TagInput>
      <TagInput inputText="Macros"></TagInput> */}

      {/* Recipe Page */}
      {/* <RecipePage
        name={"Salada"}
        information={info}
        ingredients={ingre}
        preparo={modo}
        image={require("./src/assets/salada.jpg")}
      /> */}

      {/* Main page */}
      {/* <FlatList
        vertical={true}
        data={DATA}
        renderItem={({ item }) => <RecipeScroll title={item.title} mode={item.mode} />}
        ItemSeparatorComponent={Spacing()}
        ListHeaderComponent={Spacing()}
        ListFooterComponent={Spacing()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#0000000A"
  },
});
