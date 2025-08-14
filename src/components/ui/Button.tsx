import { ButtonProps, Pressable, Text } from "react-native"

const Button = ({ title, onPress, disabled = false }: ButtonProps) => {
  return (
    <Pressable>
        <Text style={{ color: disabled ? 'gray' : 'blue' }} onPress={onPress} disabled={disabled}>
            {title}
        </Text>
    </Pressable>
    )
}

export default Button;