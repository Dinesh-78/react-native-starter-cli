import { Text } from "react-native"
import { FonttextProps } from "types/uitypes"

const Fonttext = ({ text, size = 16, color = 'black' }: FonttextProps) => {
  return (
    <Text style={{ fontSize: size, color: color }}>
        {text}
    </Text>
  )
}

export default Fonttext