import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  AgendaList,
  LocaleConfig,
  CalendarProvider,
  ExpandableCalendar,
  WeekCalendar,
  AgendaEntry,
  Agenda,
} from "react-native-calendars";
import CardClass from "../src/components/CardClass";

const FirstCalendar = () => {
  return (
    <View style={{ flex: 1 }}>
      <Agenda
        firstDay={1}
        items={{
          "2023-04-17": [
            { name: "QUIMICA GENERAL", day: "R. académico", height: 1 },
            { name: "INGLES I", day: "Presencial", height: 1 },
          ],
          "2023-04-18": [
            { name: "INDIVIDUO Y MEDIO AMBIENTE", day: "Virtual", height: 1 },
          ],
          "2023-04-19": [
            {
              name: "COMPRENSION Y REDACCION DE TEXTOS I ",
              day: "Virtual",
              height: 1,
            },
          ],
          "2023-04-20": [
            {
              name: "INTRODUCCION A LA MATERIA",
              day: "R. académico",
              height: 1,
            },
          ],
          "2023-04-21": [
            { name: "MATEMATICA", day: "R. académico", height: 1 },
          ],
          "2023-04-22": [
            { name: "QUIMICA GENERAL", day: "Presencial", height: 1 },
          ],
          "2023-04-23": [{ name: "INGLES I", day: "Virtual", height: 1 }],
        }}
        headerStyle={{
          height: 80,
          backgroundColor: "#5B36F2",
          borderColor: "white",
        }}
        markingType={"custom"}
        renderItem={(item) => (
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            <CardClass item={item} />
          </ScrollView>
        )}
      />
    </View>
  );
};

export default FirstCalendar;
