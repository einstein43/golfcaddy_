import styles from "../styles/Sidebar.module.css";
export default function Sidebar() {
  return (
    <section>
<h2> Sidebar</h2>
<p>um niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.

Het standaard stuk van Lorum Ipsum wat sinds d</p>
        <aside className={styles.SidebarCard}>
    
    <div className={styles.sidebarTag}>
      <p className="sidebar_1"> JavaScript </p>
      <p> Python </p>
      <p> HTML </p>
      <p> CSS </p>
    </div>
  </aside>
  </section>
    
  );
}
