import { useForm, SubmitHandler } from "react-hook-form"

import style from "./ContactSection.module.scss"

type HTMLInputExtends = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >

interface YummyData {
  name: string
  email: string
  message: string
}

const gimmeYourData: SubmitHandler<YummyData> = (data) => console.log(data)

export default function ContactSection() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<YummyData>()

  const formStuff: HTMLInputExtends = {
    spellCheck: "false",
    autoCapitalize: "false",
    autoComplete: "false",
    autoCorrect: "off"
  }

  return (
    <section>
      <article className="my-10 text-center flex flex-col gap-y-3.5">
        <h2>contact me lol</h2>
        <p>If you got any questions, hit me up for some shit lol</p>
      </article>
      <div className={style["form-wrapper"]}>
        <form
          className={style["form-grid-container"]}
          onSubmit={handleSubmit(gimmeYourData)}
        >
          <input
            {...formStuff}
            {...register("name", { required: true })}
            className={style["form-input-name"]}
            type="text"
            placeholder="Name"
          />
          {errors.name && "What is your goddamn name"}
          <input
            {...formStuff}
            {...register("email", { required: true })}
            className={style["form-input-email"]}
            type="email"
            placeholder="Email"
          />
          {errors.email && "BRUH YOUR EMAIL"}

          <textarea
            className={style["form-paragraph-input"]}
            {...register("message", { required: true })}
            {...formStuff}
            id="forms-pfield"
            rows={6}
            maxLength={1750}
            placeholder="Your message here, you can tell me how much of a cutie I am (Max. 1750 characters)"
          />
          {errors.message && "WOT THE HAILLL"}

          <div className={style["form-submit"]}>
            <span className={style["form-sub-label"]}>
              *All fields are required.
            </span>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
