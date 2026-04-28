import * as SQLite from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

/** Minimal expo-sqlite demo: data survives app restarts and works offline. */
export default function SqliteExampleScreen() {
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const database = await SQLite.openDatabaseAsync("simple_offline_demo.db");
      await database.execAsync(
        "CREATE TABLE IF NOT EXISTS saved_lines (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT NOT NULL);"
      );
      if (!cancelled) setDb(database);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const reload = useCallback(async () => {
    if (!db) return;
    const rows = await db.getAllAsync<{ text: string }>(
      "SELECT text FROM saved_lines ORDER BY id DESC;"
    );
    setLines(rows.map((r) => r.text));
  }, [db]);

  useEffect(() => {
    void reload();
  }, []);

  const save = async () => {
    const text = input.trim();
    if (!db || !text) return;
    await db.runAsync("INSERT INTO saved_lines (text) VALUES (?);", text);
    setInput("");
    await reload();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SQLite offline (simple)</Text>
      <Text style={styles.sub}>
        Saves to device storage — no network required.
      </Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type something…"
          placeholderTextColor="#94a3b8"
        />
        <Pressable onPress={() => void save()} style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </Pressable>
      </View>

      <Text style={styles.listLabel}>Stored lines</Text>
      <FlatList
        data={lines}
        keyExtractor={(item, i) => `${i}-${item}`}
        renderItem={({ item }) => (
          <Text style={styles.line}>{item}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nothing saved yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 56,
    paddingHorizontal: 16,
    backgroundColor: "#f8fafc",
  },
  title: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
  sub: { marginTop: 6, marginBottom: 16, color: "#64748b", fontSize: 14 },
  row: { flexDirection: "row", gap: 8, marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#0f172a",
  },
  btn: {
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#2563eb",
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "600" },
  listLabel: { fontSize: 13, fontWeight: "600", color: "#475569", marginBottom: 8 },
  line: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e2e8f0",
    fontSize: 16,
    color: "#0f172a",
  },
  empty: { color: "#94a3b8", marginTop: 8 },
});
