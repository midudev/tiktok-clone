import { supabase } from "@src/services/supabase.js";

export default function Login() {
  const handleClick = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "twitter",
    });

    console.log({ user, session, error });
  };

  return (
    <div>
      <button onClick={handleClick}>Login with Twitter</button>
    </div>
  );
}
