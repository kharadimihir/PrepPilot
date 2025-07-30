"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define basic styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.5,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 2,
  },
});

const ResumePDF = ({ content }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>{content}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
