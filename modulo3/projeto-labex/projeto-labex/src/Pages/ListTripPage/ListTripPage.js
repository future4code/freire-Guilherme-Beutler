import { useRequestData } from '../../Hooks/useRequestData';
import { URL_BASE } from '../../Constants/URL_BASE';
import { Body, CardBody, CardTrip, BodyCardTrip, HeaderBody, Img } from './style';
import Header from '../../Components/Header/Header';
import Back from '../../Img/Back.png';
import Subscribe from '../../Img/Subscribe.png';
import { useNavigate } from 'react-router-dom';
import { goToForm } from '../../Router/Coordinator';


export default function ListTripPage() {
    const navigate = useNavigate();

    const tripList = useRequestData(`${URL_BASE}/trips`, {})

    const tripComponents = tripList.trips && tripList.trips.map((t) => {
        return <BodyCardTrip key={t.id}>
            <h3>{t.name}</h3>
            <p>Descrição: {t.description}</p>
            <p>Planeta: {t.planet}</p>
            <p>Duração: {t.durationInDays}</p>
            <p>Data: {t.date}</p>
        </BodyCardTrip>
    })

    return (
        <div>
            <Header />
            <Body>
                <CardBody>
                    <HeaderBody>
                        <Img src={Back} />
                        <h1>Viagens</h1>
                        <Img onClick={() => goToForm(navigate)} src={Subscribe} />
                    </HeaderBody>
                    <CardTrip>
                        {tripComponents}
                    </CardTrip>
                </CardBody>
            </Body>
        </div>
    )
}

