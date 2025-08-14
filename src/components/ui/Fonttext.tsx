import { Text } from "react-native"

const Fonttext = ({ text, size = 16, color = 'black' }) => {
  return (
    <Text style={{ fontSize: size, color: color }}>
        {text}
    </Text>
  )
}

export default Fonttext