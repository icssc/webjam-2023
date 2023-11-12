import faq_data from "../../../assets/faq.json";
import styles from "../../styles/components/Faq.module.css";

function FAQTab(props) {
  const { title, content, id } = props;
  return (
    <div className={styles.tab}>
      <input type="checkbox" name={styles.accordion} id={id} />
      <label htmlFor={id} className={styles.tab__label}>
        {title}
      </label>
      <div className={styles.tab__content}>
        <p className="text-xl">{content}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <>
      <div className="z-50 mt-16 flex flex-col items-center gap-4 md:mt-32">
        <div className="text-4xl md:text-7xl">FAQ</div>
        <div className={`${styles.accordion} md:max-w-[50%] `}>
          {faq_data.map((element, index) => (
            <FAQTab key={index} id={index} {...element} />
          ))}
          {/* Hardcoding some FAQ tabs to include clickable URLs */}
          <div className={styles.tab}>
            <input
              type="checkbox"
              name={styles.accordion}
              id={faq_data.length}
            />
            <label htmlFor={faq_data.length} className={styles.tab__label}>
              What are the rules?
            </label>
            <div className={styles.tab__content}>
              <p className="text-xl">
                Please refer to the{" "}
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/1T2Dh_FVx0zU8xhNC2CHDMb_0xg-j2oFBUfp-M0C4FqM/edit"
                >
                  WebJam Rules and Code of Conduct
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
          <div className={styles.tab}>
            <input
              type="checkbox"
              name={styles.accordion}
              id={faq_data.length + 1}
            />
            <label htmlFor={faq_data.length + 1} className={styles.tab__label}>
              My question isn't here!
            </label>
            <div className={styles.tab__content}>
              <p className="text-xl">
                Unanswered question? Email us at{" "}
                <a target="_blank" href="mailto:icssc@uci.edu">
                  icssc@uci.edu
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.bottomCeiling} absolute left-0 top-0 z-30 w-[100%]`}
      />
      <div
        className={`${styles.anglerfish} absolute bottom-[40%] right-[10%] w-[25vw] sm:bottom-[12.5rem] sm:right-24 md:bottom-0 md:right-[.5rem] lg:w-[25vw]`}
      />
    </>
  );
}
