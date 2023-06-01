import { View, Text, Pressable } from "react-native";
import RecipePage from '../../components/RecipePage';

export default function Recipe() {

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

    return (
        <View>
            <RecipePage
                name={"Salada"}
                information={info}
                ingredients={ingre}
                preparo={modo}
                image={require("../../assets/salada.jpg")}
            />
        </View>
    );
}