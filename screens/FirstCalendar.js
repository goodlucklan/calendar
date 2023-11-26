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
          "2023-04-25": [
            { name: "QUIMICA GENERAL", day: "R. académico", height: 1 },
            { name: "INGLES I", day: "Presencial", height: 1 },
          ],
          "2023-04-26": [
            { name: "INDIVIDUO Y MEDIO AMBIENTE", day: "Virtual", height: 1 },
          ],
          "2023-04-27": [
            {
              name: "COMPRENSION Y REDACCION DE TEXTOS I ",
              day: "Virtual",
              height: 1,
            },
          ],
          "2023-04-28": [
            {
              name: "INTRODUCCION A LA MATER",
              day: "R. académico",
              height: 1,
            },
          ],
          "2023-04-29": [
            { name: "MATEMATICA", day: "R. académico", height: 1 },
          ],
          "2023-04-30": [
            { name: "QUIMICA GENERAL", day: "Presencial", height: 1 },
          ],
          "2023-05-01": [{ name: "INGLES I", day: "Virtual", height: 1 }],
        }}
        headerStyle={{
          height: 80,
          backgroundColor: "#5B36F2",
          borderColor: "white",
        }}
        theme={{
          monthTextColor: "#000000",
          textSectionTitleColor: "#4F6168",
          arrowColor: "#FFFFFF",
          dayTextColor: "#000000",
          selectedDayBackgroundColor: "#5B36F2",
          selectedDayTextColor: "#FFFFFF",
          textInactiveColor: "#000000",
          textDisabledColor: "#000000",
          todayTextColor: "purple",
          agendaDayTextColor: "#000000",
          agendaDayNumColor: "#000000",
          textSectionTitleColor: "#000000",
          dotColor: "#FFFFFF",
          textDayStyle: {
            color: "#000000",
          },
          ["stylesheet.calendar.header"]: {
            week: {
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#FFF",
              borderColor: "#FFF",
              alignItems: "center",
              height: 35,
              paddingHorizontal: 8,
              color: "#000000",
            },
          },
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
