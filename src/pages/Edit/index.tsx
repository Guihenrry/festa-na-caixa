import React, { useState, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import boxFestaJuninaImg from '../../assets/box-festa-junina.svg';

import * as S from './styles';

import { ReactComponent as CandleIcon } from '../../assets/candle.svg';
import { ReactComponent as CandleOptionDefaultIcon } from '../../assets/candle-option-default.svg';
import { ReactComponent as CandleOptionFaiscaIcon } from '../../assets/candle-option-faisca.svg';
import { ReactComponent as CandleOptionNeonIcon } from '../../assets/candle-option-neon.svg';

import { ReactComponent as InvitationIcon } from '../../assets/invitation.svg';
import { ReactComponent as BalloonIcon } from '../../assets/balloon.svg';
import { ReactComponent as DecorationIcon } from '../../assets/decoration.svg';
import { ReactComponent as CandyIcon } from '../../assets/candy.svg';
import { ReactComponent as CupIcon } from '../../assets/cup.svg';

const Edit: React.FC = () => {
  const [activeConfig, setActiveConfig] = useState('Velas');
  const [activeOption, setActiveOption] = useState('default');

  const handleClickConfigButton = useCallback((newActiveConfig) => {
    setActiveConfig(newActiveConfig);
  }, []);

  const handleClickOptionButton = useCallback((newActiveOption) => {
    setActiveOption(newActiveOption);
  }, []);

  return (
    <S.Container>
      <S.Theme>
        <S.ThemeTitle>Festa Junina</S.ThemeTitle>
        <S.ThemeImage src={boxFestaJuninaImg} alt="Caixa Festa Junina" />

        <S.ThemeActions>
          <S.PrevStepLink to="/">
            <FiArrowLeft />
            Trocar Tema
          </S.PrevStepLink>

          <S.NextStepLink to="/checkout">
            Finalizar Pedido
            <FiArrowRight />
          </S.NextStepLink>
        </S.ThemeActions>
      </S.Theme>

      <S.EditWrapper>
        <S.Title>Edite sua caixa</S.Title>

        <S.BoxConfigList>
          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Velas'}
              onClick={() => handleClickConfigButton('Velas')}
            >
              <CandleIcon />
              Velas
            </S.BoxConfigButton>
          </S.BoxConfigListItem>

          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Convite'}
              onClick={() => handleClickConfigButton('Convite')}
            >
              <InvitationIcon />
              Convite
            </S.BoxConfigButton>
          </S.BoxConfigListItem>

          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Bexiga'}
              onClick={() => handleClickConfigButton('Bexiga')}
            >
              <BalloonIcon />
              Bexiga
            </S.BoxConfigButton>
          </S.BoxConfigListItem>

          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Decorações'}
              onClick={() => handleClickConfigButton('Decorações')}
            >
              <DecorationIcon />
              Decorações
            </S.BoxConfigButton>
          </S.BoxConfigListItem>

          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Papel para balas'}
              onClick={() => handleClickConfigButton('Papel para balas')}
            >
              <CandyIcon />
              Papel para balas
            </S.BoxConfigButton>
          </S.BoxConfigListItem>

          <S.BoxConfigListItem>
            <S.BoxConfigButton
              active={activeConfig === 'Copos'}
              onClick={() => handleClickConfigButton('Copos')}
            >
              <CupIcon />
              Copos
            </S.BoxConfigButton>
          </S.BoxConfigListItem>
        </S.BoxConfigList>

        <S.OptionsWrapper>
          <S.OptionsTitle>{activeConfig}</S.OptionsTitle>

          {activeConfig === 'Velas' && (
            <S.Options>
              <S.Option>
                <S.OptionButton
                  active={activeOption === 'default'}
                  onClick={() => handleClickOptionButton('default')}
                >
                  <CandleOptionDefaultIcon />
                  <S.OptionTitle>Padrão</S.OptionTitle>
                </S.OptionButton>
              </S.Option>

              <S.Option>
                <S.OptionButton
                  active={activeOption === 'faisca'}
                  onClick={() => handleClickOptionButton('faisca')}
                >
                  <CandleOptionFaiscaIcon />
                  <S.OptionTitle>Faisca</S.OptionTitle>
                </S.OptionButton>
              </S.Option>

              <S.Option>
                <S.OptionButton
                  active={activeOption === 'neon'}
                  onClick={() => handleClickOptionButton('neon')}
                >
                  <CandleOptionNeonIcon />
                  <S.OptionTitle>Neon</S.OptionTitle>
                </S.OptionButton>
              </S.Option>
            </S.Options>
          )}

          {activeConfig === 'Bexiga' && (
            <S.Options>
              <S.Option>
                <S.OptionButton
                  active={activeOption === 'default'}
                  onClick={() => handleClickOptionButton('default')}
                >
                  <CandleOptionDefaultIcon />
                  <S.OptionTitle>Padrão</S.OptionTitle>
                </S.OptionButton>
              </S.Option>

              <S.Option>
                <S.OptionButton
                  active={activeOption === 'faisca'}
                  onClick={() => handleClickOptionButton('faisca')}
                >
                  <CandleOptionFaiscaIcon />
                  <S.OptionTitle>Faisca</S.OptionTitle>
                </S.OptionButton>
              </S.Option>

              <S.Option>
                <S.OptionButton
                  active={activeOption === 'neon'}
                  onClick={() => handleClickOptionButton('neon')}
                >
                  <CandleOptionNeonIcon />
                  <S.OptionTitle>Neon</S.OptionTitle>
                </S.OptionButton>
              </S.Option>
            </S.Options>
          )}
        </S.OptionsWrapper>
      </S.EditWrapper>
    </S.Container>
  );
};

export default Edit;
