import style from "./ContactSection.module.scss"

export default function ContactSection() {
  return (
    <section>
      <article className="my-10 text-center flex flex-col gap-y-3.5">
        <h2>contact me lol</h2>
        <p>If you got any questions, hit me up for some shit lol</p>
      </article>
      <div className={style["form-wrapper"]}>
        <form className={style["form-grid-container"]}>
          <InputField type="name" label="Name" placeholder="Deez Nuts" />
          <InputField
            type="email"
            label="Email"
            placeholder="name@domain.com"
          />
          <ParagraphField />
          <div className={style["form-submit"]}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  )
}

interface InputFieldProps {
  type: "email" | "name"
  label: string
  placeholder: string
}

function InputField(props: InputFieldProps) {
  return (
    <label htmlFor={`forms-${props.type}`}>
      <span className={style["form-label"]}>{props.label}</span>
      <input
        className={style["form-text-input"]}
        aria-label={props.label}
        autoCapitalize="false"
        autoComplete="false"
        autoCorrect="off"
        spellCheck="false"
        required
        type={props.type}
        name={props.type}
        id={`forms-${props.type}`}
        placeholder={props.placeholder}
        maxLength={40}
      />
    </label>
  )
}

function ParagraphField() {
  return (
    <label htmlFor="forms-pfield" className={style["paragraph-input"]}>
      <span className={style["form-label"]}>Details</span>
      <textarea
        className={style["form-text-input"]}
        id="forms-pfield"
        autoCapitalize="false"
        autoComplete="false"
        required
        autoCorrect="off"
        spellCheck="false"
        rows={6}
        maxLength={1750}
        style={{ resize: "none" }}
        placeholder="Tell me how much of a cutie I am (Max. 1750 characters)"
      />
    </label>
  )
}
