export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const Login = () => {
      if (username === 'admin' && password === '1234') {
        navigation.navigate('Home');
      } else {
        alert('Login invalido!');
      }
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Usuario"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <View style={styles.button}>
          <Button title="Login" onPress={Login} />
        </View>
      </View>
    );
  }