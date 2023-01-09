import Link from "next/link";
import styles from "../styles/round.module.css";
import classNames from "classNames";
import {
  ChangeEvent,
  ChangeEventHandler,
  useMemo,
  useRef,
  useState,
} from "react";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import internal from "stream";
import Player from "./interfaces/player.interface";
import activePlayer from "./interfaces/activeplayers.interface";

type Inputs = {
  course: string;
  starting_hole: number;
  round_type: string;
};

function Round() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [playerCard, setPlayerCard] = useState<activePlayer[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(watch("course"));


  let input: string;

  const [playerId, setPlayerId] = useState<number>(0)

  const handleChange = (e: any) => {
    const value = e.target.value

    if (value === '') {
      setPlayerId(0)
    } else {
      setPlayerId(parseInt(value))
    }
  }


  const getPlayercards = async (id: string) => {
   

    try {
      const response = await fetch(`http://localhost:3001/activeplayer?id=${playerId}`);
      if (!response.ok) {
        throw new Error(`This is an HTTP error: the status is ${error}`);
      }
      let actualData = await response.json();

      setPlayerCard(actualData);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
    console.log(playerCard);
    return playerCard;
  };

  return (
    <>
      <div className={styles.wrapper_div}>
        <div className={styles.playercards_div}>
          <button className={styles.button} onClick={() => getPlayercards(input)}>
            Get info for round:
          </button>
          <input className={classNames(styles.input)}
            type="text" 
            id="inputText"
            onChange={handleChange}
          />
          <h3>
            {playerCard &&
              playerCard.map((player, index) => (
                <div className={styles.playercards_div} key={index}>
                  <div className={styles.playercard_1}>
                    <img
                      className={styles.playercard_img}
                      src="/images/userimage.png"
                      alt=""
                    />
                    Player:{player.player1},
                    Course:{player.course},
                    Score:{player.score}
                  </div>
                  
                </div>
              ))}
          </h3>
        </div>
        <div className={styles.roundsettings_div}>
          ROUND SETTINGS
          <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={classNames(styles.input)}
              defaultValue="course"
              {...register("course", { required: true })}
            />
            <input
              className={classNames(styles.input)}
              defaultValue="starting hole"
              {...register("starting_hole", { required: true })}
            />
            <input
              className={classNames(styles.input)}
              defaultValue="round type"
              {...register("round_type", { required: true })}
            />
            {errors.round_type && (
                <span>Je bent round type vergeten loser</span>
              ) &&
              errors.course && <span>Je bent de course vergeten lijer</span> &&
              errors.starting_hole && (
                <span id={styles.span}>
                  Alle velden moeten ingevuld worden!!!!
                </span>
              )}
              <label htmlFor="verzendknop"></label>
            <input id="verzendknop" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Round;
