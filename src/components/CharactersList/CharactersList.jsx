import css from './CharactersList.module.css';
import { useSelector } from 'react-redux';
import { selectCharacters } from 'myRedux';
import { Character } from 'components';

export function CharactersList() {
  const characters = useSelector(selectCharacters);
  console.log(characters);
  return (
    <ul className={css.characters}>
      {characters.map(({ _id, nickname }) => (
        <Character key={_id} name={nickname}></Character>
      ))}
    </ul>
  );
}
