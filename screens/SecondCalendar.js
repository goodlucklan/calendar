import React, { useRef, useCallback } from "react";
import { StyleSheet } from "react-native";
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  LocaleConfig,
} from "react-native-calendars";
import { agendaItems, getMarkedDates } from "../src/components/agendaItems";
import AgendaItem from "../src/components/AgendaItem";

LocaleConfig.locales.es = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Agos",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  today: 'Hoy',
};

LocaleConfig.defaultLocale = "es";
LocaleConfig.locales.en = LocaleConfig.locales[''];

const ITEMS = agendaItems;

const SecondCalendar = () => {
  const marked = useRef(getMarkedDates());

  const renderItem = useCallback(({ item }) => {
    return <AgendaItem item={item} />;
  }, []);

  return (
    <CalendarProvider date={ITEMS[1].title} showTodayButton theme={{
      todayButtonTextColor: "#5B36F2"
    }}>
      <ExpandableCalendar
        firstDay={1}
        markedDates={marked.current}
        headerStyle={{
          backgroundColor: "#5B36F2",
          alignContent: "center",
          borderColor: "white",
          height: 50,
        }}
        markingType="custom"
        theme={{
          monthTextColor: "#FFFFFF",
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
              height: 40,
              paddingHorizontal: 8,
              color: "#000000",
            },
          },
        }}
      />
      <AgendaList sections={ITEMS} renderItem={renderItem} />
    </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    backgroundColor: "lightgrey",
  },
  section: {
    color: "grey",
    textTransform: "capitalize",
  },
});

export default SecondCalendar;
