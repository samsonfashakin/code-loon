export const codeExamples = {
  "Props.cs": `using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PropRandomizer : MonoBehaviour
{
    public List<GameObject> propSpawnPoints; //references prop locations in the scene
    public List<GameObject> propPrefabs; //references prop prefabs to spawn

    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        spawnProps();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void spawnProps()
    {
        foreach(GameObject spawnPoint in propSpawnPoints)
        {
            int rand = UnityEngine.Random.Range(0, propPrefabs.Count);
            //Instantiate a random prop at the current spawn point, Quaternion.identity means the prop will have no rotation when spawned
            Instantiate(propPrefabs[rand], spawnPoint.transform.position, Quaternion.identity);
            Console.WriteLine("Spawned prop at: " + spawnPoint.transform.position); //Debug log to confirm spawning
        }
    }
}
`,
"Player.cs": `using UnityEngine;

public class PlayerAnimator : MonoBehaviour
{
    //References
    Animator am;
    PlayerMovement pm;
    SpriteRenderer sr;


    void Start()
    {
        am = GetComponent<Animator>();
        pm = GetComponent<PlayerMovement>();
        sr = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        if(pm.moveDir.x != 0 || pm.moveDir.y != 0)
        {
            am.SetBool("Move", true);
            SpriteDirectionChecker();
        }
        else
        {
            am.SetBool("Move", false);
            SpriteDirectionChecker();
        }
    }

    void SpriteDirectionChecker()
    {
        if(pm.moveDir.x < 0)
        {
            sr.flipX = true;
        }
        else if(pm.moveDir.x > 0)
        {
            sr.flipX = false;
        }
    }
}
`,
"Movement.cs": `using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
  public float moveSpeed;
  Rigidbody2D rb;
  [HideInInspector]
  public Vector2 moveDir;

    
  void Start()
  {
      rb = GetComponent<Rigidbody2D>();
  }

  void Update()
  {
      InputManagement();
  }

  //Handles physics updates better than Update because of consistent time intervals between calls rather than frame rate
  void FixedUpdate()
  {
      Move();
  }

  //Processes input
  void InputManagement()
  {
      float moveX = Input.GetAxisRaw("Horizontal");
      float moveY = Input.GetAxisRaw("Vertical");

      moveDir = new Vector2(moveX, moveY).normalized;
  }

  //Handles movement
  void Move()
  {
    rb.linearVelocity = new Vector2(moveDir.x * moveSpeed, moveDir.y * moveSpeed);
  }

}
`

}