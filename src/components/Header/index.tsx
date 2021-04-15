import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTrasactionModal: () => void;
}

export function Header({ onOpenNewTrasactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={Logo} alt="dt money"/>
                <button type="button" onClick={onOpenNewTrasactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}