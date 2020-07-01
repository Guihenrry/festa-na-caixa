import React, { useCallback, useState, ChangeEvent, useMemo } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';

import visaImg from '../../assets/visa.svg';
import boxFestaJuninaImg from '../../assets/box-festa-junina.svg';

import newId from '../../utils/newId';

import { ReactComponent as CandleIcon } from '../../assets/candle.svg';
import { ReactComponent as InvitationIcon } from '../../assets/invitation.svg';
import { ReactComponent as BalloonIcon } from '../../assets/balloon.svg';
import { ReactComponent as DecorationIcon } from '../../assets/decoration.svg';
import { ReactComponent as CandyIcon } from '../../assets/candy.svg';
import { ReactComponent as CupIcon } from '../../assets/cup.svg';

const Checkout: React.FC = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberArray, setCardNumberArray] = useState([
    '****',
    '****',
    '****',
    '****',
  ]);
  const [cardMonth, setCardMonth] = useState(() => {
    return (new Date().getMonth() + 1).toString().padStart(2, '0');
  });
  const [cardYear, setCardYear] = useState(() => {
    return new Date().getFullYear();
  });
  const [cvv, setCvv] = useState('');
  const [showCardBack, setShowCardBack] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);
  const cardYearFormatted = useMemo(() => cardYear.toString().slice(2), [
    cardYear,
  ]);
  const selectYearsOptions = useMemo(() => {
    const yearsArray = new Array(12).fill(1).map((item, index) => {
      return String(currentYear + index);
    });
    return yearsArray;
  }, [currentYear]);

  const handleChangeCardName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCardName(event.target.value);
    },
    [],
  );

  const handleChangeCardMonth = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setCardMonth(event.target.value);
    },
    [],
  );

  const handleChangeCardYear = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = Number(event.target.value);

      if (value === currentYear) {
        setCardMonth(currentMonth.toString().padStart(2, '0'));
      }

      setCardYear(value);
    },
    [currentMonth, currentYear],
  );

  const handleChangeCvv = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace(/\s/g, '');

      if (value.length > 4) {
        return;
      }

      if (Number(value) || !value) {
        setCvv(value);
      }
    },
    [],
  );

  const handleChangeCardNumber = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value.replace(/\s/g, '');

      if (value.length > 16) {
        return;
      }

      if (Number(value) || !value) {
        const cardNumberMatchArray = value.match(/\d{4}|\d+/g);
        const newValueWithMask = cardNumberMatchArray?.join(' ');

        setCardNumberArray(
          cardNumberMatchArray || ['****', '****', '****', '****'],
        );
        setCardNumber(newValueWithMask || value);
      }
    },
    [],
  );

  const handleCardClick = useCallback(() => {
    setShowCardBack((state) => !state);
  }, []);

  return (
    <S.Container>
      <S.BoxDetail>
        <S.BackLink to="edit">
          <FiArrowLeft />
          Editar caixa
        </S.BackLink>

        <S.BoxDetailTitle>Caixa Festa Junina</S.BoxDetailTitle>

        <S.BoxInfo>
          <S.BoxImage src={boxFestaJuninaImg} alt="Caixa Festa Junina" />

          <S.BoxConfigList>
            <S.BoxConfig>
              <CandleIcon />
              <div>
                <S.BoxConfigTitle>Velas</S.BoxConfigTitle>
                <S.BoxConfigValue>Faisca</S.BoxConfigValue>
              </div>
            </S.BoxConfig>

            <S.BoxConfig>
              <InvitationIcon />
              <div>
                <S.BoxConfigTitle>Convites</S.BoxConfigTitle>
                <S.BoxConfigValue>Padrão</S.BoxConfigValue>
              </div>
            </S.BoxConfig>

            <S.BoxConfig>
              <BalloonIcon />
              <div>
                <S.BoxConfigTitle>Balões</S.BoxConfigTitle>
                <S.BoxConfigValue>Numericos</S.BoxConfigValue>
              </div>
            </S.BoxConfig>

            <S.BoxConfig>
              <DecorationIcon />
              <div>
                <S.BoxConfigTitle>Decorações</S.BoxConfigTitle>
                <S.BoxConfigValue>Padrão</S.BoxConfigValue>
              </div>
            </S.BoxConfig>

            <S.BoxConfig>
              <CandyIcon />
              <div>
                <S.BoxConfigTitle>Papel de Bala</S.BoxConfigTitle>
                <S.BoxConfigValue>Padrão</S.BoxConfigValue>
              </div>
            </S.BoxConfig>
            <S.BoxConfig>
              <CupIcon />
              <div>
                <S.BoxConfigTitle>Copos</S.BoxConfigTitle>
                <S.BoxConfigValue>Médio</S.BoxConfigValue>
              </div>
            </S.BoxConfig>
          </S.BoxConfigList>
        </S.BoxInfo>
      </S.BoxDetail>

      <S.Payment>
        <S.PaymentTitle>Detalhes de Pagamento</S.PaymentTitle>

        <S.Card>
          <S.CardInner showCardBack={showCardBack} onClick={handleCardClick}>
            <S.CardFront>
              <img src={visaImg} alt="Visa" />
              <S.CardData>
                <S.CardNumber>
                  {cardNumberArray.map((item) => (
                    <span key={newId()}>{item}</span>
                  ))}
                </S.CardNumber>

                <S.CardDetails>
                  <S.CardName>{cardName || 'Nome no Cartão'}</S.CardName>
                  <S.CardExpirationDate>
                    {`${cardMonth}/${cardYearFormatted}`}
                  </S.CardExpirationDate>
                </S.CardDetails>
              </S.CardData>
            </S.CardFront>

            <S.CardBack>
              <S.CardBlackBar />
              <S.CardCvvLabel>CVV</S.CardCvvLabel>
              <S.CardCvv>{cvv || '***'}</S.CardCvv>
            </S.CardBack>
          </S.CardInner>
        </S.Card>

        <S.PaymentForm>
          <S.InputWrapper>
            <S.Input
              value={cardName}
              onChange={handleChangeCardName}
              onFocus={() => setShowCardBack(false)}
              id="name"
              required
            />
            <S.Label htmlFor="name">Nome no Cartão</S.Label>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Input
              value={cardNumber}
              onChange={handleChangeCardNumber}
              onFocus={() => setShowCardBack(false)}
              id="number"
              required
            />
            <S.Label htmlFor="number">Número do Cartão</S.Label>
          </S.InputWrapper>

          <S.CardFormGroup>
            <div>
              <S.Label>Data de vencimento</S.Label>
              <S.Select
                value={cardMonth}
                onChange={handleChangeCardMonth}
                onFocus={() => setShowCardBack(false)}
              >
                <option
                  value="01"
                  disabled={currentYear === cardYear && currentMonth > 1}
                >
                  01
                </option>
                <option
                  value="02"
                  disabled={currentYear === cardYear && currentMonth > 2}
                >
                  02
                </option>
                <option
                  value="03"
                  disabled={currentYear === cardYear && currentMonth > 3}
                >
                  03
                </option>
                <option
                  value="04"
                  disabled={currentYear === cardYear && currentMonth > 4}
                >
                  04
                </option>
                <option
                  value="05"
                  disabled={currentYear === cardYear && currentMonth > 5}
                >
                  05
                </option>
                <option
                  value="06"
                  disabled={currentYear === cardYear && currentMonth > 6}
                >
                  06
                </option>
                <option
                  value="07"
                  disabled={currentYear === cardYear && currentMonth > 7}
                >
                  07
                </option>
                <option
                  value="08"
                  disabled={currentYear === cardYear && currentMonth > 8}
                >
                  08
                </option>
                <option
                  value="09"
                  disabled={currentYear === cardYear && currentMonth > 9}
                >
                  09
                </option>
                <option
                  value="10"
                  disabled={currentYear === cardYear && currentMonth > 10}
                >
                  10
                </option>
                <option
                  value="11"
                  disabled={currentYear === cardYear && currentMonth > 11}
                >
                  11
                </option>
                <option
                  value="12"
                  disabled={currentYear === cardYear && currentMonth > 12}
                >
                  12
                </option>
              </S.Select>
              <S.Select
                value={cardYear}
                onChange={handleChangeCardYear}
                onFocus={() => setShowCardBack(false)}
              >
                {selectYearsOptions.map((year) => (
                  <option value={year} key={year}>
                    {year}
                  </option>
                ))}
              </S.Select>
            </div>

            <S.InputWrapper>
              <S.Input
                value={cvv}
                onChange={handleChangeCvv}
                onFocus={() => setShowCardBack(true)}
                id="cvv"
                required
              />
              <S.Label htmlFor="cvv">CVV</S.Label>
            </S.InputWrapper>
          </S.CardFormGroup>

          <S.SubmitButton type="submit">Finalizar</S.SubmitButton>
        </S.PaymentForm>
      </S.Payment>
    </S.Container>
  );
};

export default Checkout;
