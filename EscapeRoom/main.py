inventory = []
KitchenUnlock = False
LibraryUnlock = False
GameRoomUnlock = False
bookshelfAttempts = 3


def basement():
    print("You are in the basement")
    done = False
    while not done:
        print("-------------------")
        print("What do you want to do?")
        print("1: Search for anything that might seem useful")
        print("2: Wander around aimlessly")
        print("3: Go to another room")
        response = int(input())
        if response == 1:
            print("You find a lot of items that you could put in your backpack")
            print("-------------------")
            print("What do you want to pickup?")
            print("1: A flashlight")
            print("2: A shovel")
            print("3: A mop")
            print("4: An American flag")
            print("5: A safe")
            print("6: Nothing")
            response = int(input())
            if response == 1:
                print("You now have a flashlight")
                inventory.append("flashlight")
            if response == 2:
                print("You now have a shovel")
                inventory.append("shovel")
            if response == 3:
                print("You now have a mop")
                inventory.append("mop")
            if response == 4:
                print("You now have an American flag")
                inventory.append("flag")
            if response == 5:
                print(
                    "The safe is too heavy for you to pick up, but you notice there is a combination lock on the safe.")
                print("[Type in combination to open safe]")
                response = int(input())
                if response != 5683:
                    print("[Incorrect combination]")
                if response == 5683:
                    print("You open the safe, and you find a key inside!")
                    print("You collect the key.")
                    inventory.append("library key")
        elif response == 2:
            print("You were wandering around, and you accidentally stumbled over a bucket full of water.")
            print("The water spilled onto the floor.")
            print("-------------------")
            print("1: Put the bucket back and step away")
            print("2: Decide to put the bucket in your backpack")
            print("3: Try to clean the mess up")
            response = int(input())
            if response == 1:
                print("You put the bucket back")
            if response == 2:
                print("You now have a bucket")
                inventory.append("bucket")
            if response == 3:
                search = False
                for x in inventory:
                    if x == "mop":
                        print(
                            "You cleaned up the mess with your mop, "
                            "but while you were cleaning you see something shiny..."
                            " It's a key!")
                        print("You collect the key.")
                        inventory.append("kitchen key")
                        search = True
                if search == False:
                    print("You tried in vain to clean the mess up")
        elif response == 3:
            done = True


def kitchen():
    global LibraryUnlock
    print("You are in the kitchen")
    done = False
    while not done:
        print("-------------------")
        print("What do you want to do?")
        print("1: Search for anything that might seem useful")
        print("2: Interact with objects in the room")
        print("3: Go to another room")
        response = int(input())
        if response == 1:
            print(
                """You find a counter with 4 pans, 8 spoons, 1 oven, and a table with pizza on it. 
You also see a sign that says "A hungry body is a hungry mind".""")
        if response == 2:
            print("-------------------")
            print("What do you want to interact with?")
            print("1: Pans")
            print("2: Spoons")
            print("3: Oven")
            print("4: Pizza")
            print("5: The counter")
            response = int(input())
            if response == 1:
                print("1: Pick it up")
                print("2: Do nothing")
                response = int(input())
                if response == 1:
                    print("You picked up 1 pan.")
                    inventory.append("pan")
            if response == 2:
                print("1: Pick it up")
                print("2: Do nothing")
                response = int(input())
                if response == 1:
                    print("You picked up 1 spoon.")
                    inventory.append("spoon")
            if response == 3:
                print("1: Turn it on")
                print("2: Do nothing")
                response = int(input())
                if response == 1:
                    search = False
                    for x in inventory:
                        if x == "pizza":
                            print("You put the pizza in the oven")
                            inventory.remove("pizza")
                            search = True
                    if search == False:
                        print("You realized you have nothing in your inventory to bake. You turn it off.")
                    else:
                        print("-------------------")
                        print("What temperature do you want to turn the oven to?")
                        print("1: 400 degrees (normal)")
                        print("2: 800 degrees (warning: contents may burn)")
                        response = int(input())
                        if response == 1:
                            print(
                                "Your pizza is cooking... But you don't have time to wait around so you turn the oven off, and walk away.")
                        if response == 2:
                            print(
                                "Your pizza is burning! You turn the oven off, "
                                "but it's too late because the smoke has activated the sprinklers "
                                "and water starts to rain down in the room.")
                        search = False
                        for x in inventory:
                            if x == "bucket":
                                print(
                                    "The bucket you have starts to fill up with water... You wonder what you'll do with that much water...")
                                inventory.remove("bucket")
                                inventory.append("water bucket")
                                search = True
                        if search == False:
                            print("If only you had something to collect this water...")
            if response == 4:
                print("-------------------")
                print("You open the box of pizza, and it's cold to the touch.")
                print("1: Take the pizza box apart to see if something might be hidden in it")
                print("2: Pick it up and keep it for later... Who knows, you might get hungry...")
                print("3: Ignore it, pizza won't be able to help you right now")
                response = int(input())
                if response == 1:
                    print("You take the pizza box apart, and you find the following numbers scribbled on the bottom:")
                    print(""" "5683" """)
                if response == 2:
                    print("You decide to keep the pizza for later.")
                    inventory.append("pizza")

            if response == 5:
                print(
                    """There's a scrap of paper that says, "dinner is at 6:00" the sign makes you think that something clock-like could lead to a hint...""")
            response = 0
        if response == 3:
            done = True


def library():
    global bookshelfAttempts
    print("You are in the library")
    done = False
    while not done:
        print("-------------------")
        print("What do you want to do?")
        print("1: Search for anything that might seem useful")
        print("2: Interact with objects in the room")
        print("3: Go to another room")
        response = int(input())
        if response == 1:
            print(
                "You find a giant bookshelf spanning the whole wall, a smaller bookshelf to the side, a desk, and a really old framed picture of the moon.")
        if response == 2:
            print("What do you want to interact with?")
            print("1: Big Bookshelf")
            print("2: Small Barred Bookshelf")
            print("3: Desk")
            print("4: Picture Frame")
            response = int(input())
            if response == 1:
                print(
                    "You find the bookshelf is divided into four labeled sections: Section A, Section B, Section C, and Section D. Which one do you want to search?")
                print("1: Section A")
                print("2: Section B")
                print("3: Section C")
                print("4: Section D")
                response = int(input())
                if response == 1:
                    print("You find nothing useful in this section.")
                if response == 2:
                    print("""You find a piece of paper with this written on it: "No food in the library." """)
                if response == 3:
                    print("You find nothing useful in this section.")
                if response == 4:
                    print("""
You find a book that is slightly out of place. 
You pull it out and the title reads, "The flight of Apollo 11". 
You open it, and a piece of paper falls out, there's a number written on it. 
"1969" 
You put it away.""")
                response = 0
            if response == 2:
                print(
                    "You find bars surrounding this bookshelf, "
                    "which means you can reach your hand in to push books in, but not pull them out. "
                    "There are 4 books on the bookshelf. 2 of them are not pushed in all the way.")
                print("Do you want to see what happens when you push in some of the books?")
                print("1: Yes")
                print("2: No")
                response = int(input())
                if response == 1 and bookshelfAttempts > 0:
                    print("-------------------")
                    print("Which book do you want to push in?")
                    print("1: A blue book")
                    print("2: A red book")
                    print("3: A green book")
                    print("4: A yellow book")
                    print("5: Both the blue and red books")
                    print("6: Both the green and yellow books")
                    print("7: Both the blue and yellow books")
                    print("8: Both the red and green books")
                    response = int(input())
                    if response > 0 and response < 5:
                        print("You push it in but almost immediately some spring attached pushes it back.")
                        bookshelfAttempts -= 1
                        print("A loud voice booms over a hidden speaker.")
                        print(""""You have " """, bookshelfAttempts,
                              """" attempts left before that bookshelf will lock." """)
                    if response > 4 and response != 6:
                        print("You push them in but almost immediately some spring attached pushes it back.")
                        bookshelfAttempts -= 1
                        print("A loud voice booms over a hidden speaker.")
                        print(""""You have " """, bookshelfAttempts,
                              """" attempts left before that bookshelf will lock." """)
                    if response == 6:
                        print("You push the green and yellow books in and hear gears turning...")
                        print("A key drops from under the bars!")
                        print("You collect the key.")
                        inventory.append("game room key")
                if bookshelfAttempts == 0:
                    print("The bookshelf is now locked. You do not have access to those books anymore.")
            if response == 3:
                print("You find a book on the desk.")
                print("The title reads,")
                print(""" "1984" """)
            if response == 4:
                print("You try moving the picture frame, but there's nothing behind it.")
                print("You notice a cylinder-sized hole in the wall next to the picture.")
                print("You peer in, there seems to be a mechanism that detects if anything fits.")
                print("Would you like to pull out what you have and see if it fits into the hole?")
                print("1: Yes")
                print("2: No")
                response = int(input())
                if response == 1:
                    search = False
                    for x in inventory:
                        if x == "flag":
                            print("You find the American flag that you have, and try putting it in the hole. It fits!")
                            print("You hear gears turning, and from the ceiling, falls a piece of paper.")
                            print("It reads,")
                            print(""" "I wish I could go to wriGlY field." """)
                            inventory.remove("flag")
                            search = True
                    if search == False:
                        print("You have nothing that could fit in the hole.")
            response = 0
        if response == 3:
            done = True


def gameroom():
    print("You are in the game room.")
    done = False
    while not done:
        print("-------------------")
        print("What do you want to do?")
        print("1: Search for anything that might seem useful")
        print("2: Interact with objects in the room")
        print("3: Go to another room")
        response = int(input())
        if response == 1:
            print(
"You find a pool table, a bunch of cues locked behind a glass box, a foosball table, and a claw machine.")
        if response == 2:
            print("What do you want to interact with?")
            print("1: The pool table")
            print("2: The cues")
            print("3: The foosball table")
            print("4: The claw machine")
            response = int(input())
            if response == 1:
                print("There is a singular 8 ball on the table.")
                search = False
                for x in inventory:
                    if x == "cue":
                        print("With your cue, you hit the ball into one of the pockets in the table.")
                        print("You hear the sound of gears turning...")
                        print("Near the glass box, a trap door opens up revealing a golden key!")
                        print("You grab the golden key.")
                        inventory.append("golden key")
                        search = True
                if search == False:
                    print("You touch it.")
                    print(""" "Ow!" """)
                    print("It's too hot to touch with your hands.")
            if response == 2:
                print("The cues are behind a glass box locked by a green lock.")
                search = False
                for x in inventory:
                    if x == "green key":
                        print("You open the box with your green key.")
                        print("You grab one of the cues inside the box.")
                        inventory.append("cue")
                        search = True
                if search == False:
                    print("You have nothing to open it with.")
            if response == 3:
                print(
"You walked over to the foosball table, but then you realized you have no one to play foosball with. :(")
            if response == 4:
                print("You walk over to the claw machine, and notice that a green key is inside.")
                print("You try to use the joystick, but then realize it's broken.")
                print(
"You notice that at the top of the claw machine there is is a small hole big enough to put your hand through.")
                print(
"But the key is at the bottom of the claw machine, so you won't be able to reach it unless it was higher...")
                print("----------------------------------------------------------------------------")
                print("Do you want to see if anything you have might solve this problem?")
                print("1: Yes")
                print("2: No")
                response = int(input())
                if response == 1:
                    search = False
                    for x in inventory:
                        if x == "water bucket":
                            print("You grab your bucket filled with water and pour it into the claw machine opening.")
                            print("The key floats to the top!")
                            print("You collect the green key.")
                            inventory.remove("water bucket")
                            inventory.append("bucket")
                            inventory.append("green key")
                            search = True
                    if search == False:
                        print("You currently do not have anything to solve this problem.")
            response = 0
        if response == 3:
            done = True


def main():
    global KitchenUnlock, LibraryUnlock, GameRoomUnlock, inventory
    print("You are in an escape room, and your goal is to escape as fast as possible. Good Luck!")

    done = False
    while not done:
        print("-------------------")
        print(""
              "You notice 5 doors each with a sign above them. "
              "Locks are on 4 of them. Which door do you want to go through?")
        print("1: Basement. Unlocked? ", True)
        print("2: Kitchen. Unlocked? ", KitchenUnlock)
        print("3: Library. Unlocked? ", LibraryUnlock)
        print("4: Game Room. Unlocked? ", GameRoomUnlock)
        print("5: Exit. Unlocked? ", False)
        print("9: View what you have.")
        print("-------------------")
        response = int(input())
        if response == 1:
            basement()
        if response == 2:
            if KitchenUnlock == False:
                search = False
                for x in inventory:
                    if x == "kitchen key":
                        print("You pull out the key that you have and unlock the door. It swings wide open. You enter.")
                        print("-------------------")
                        KitchenUnlock = True
                        search = True
                        kitchen()
                if search == False:
                    print("You try your best, but you cannot unlock the door.")
            else:
                kitchen()
        if response == 22:  # one of the dev tools
            kitchen()
        if response == 3:
            if LibraryUnlock == False:
                search = False
                for x in inventory:
                    if x == "library key":
                        print("You pull out the key that you have and unlock the door. It swings wide open. You enter.")
                        print("-------------------")
                        LibraryUnlock = True
                        search = True
                        library()
                if search == False:
                    print("You try your best, but you cannot unlock the door.")
            else:
                library()
        if response == 33:  # one of the dev tools
            library()
        if response == 4:
            if GameRoomUnlock == False:
                search = False
                for x in inventory:
                    if x == "game room key":
                        print("You pull out the key that you have and unlock the door. It swings wide open. You enter.")
                        print("-------------------")
                        GameRoomUnlock = True
                        search = True
                        gameroom()
                if search == False:
                    print("You try your best, but you cannot unlock the door.")
            else:
                gameroom()
        if response == 44:  # one of the dev tools
            gameroom()
        if response == 5:
            search = False
            for x in inventory:
                if x == "golden key":
                    print("You pull out the key that you have and unlock the door. It swings wide open. You exit.")
                    print("-------------------")
                    search = True
                    print("Great job! You escaped the escape room!")
                    done = True
            if search == False:
                print("You try your best, but you cannot unlock the door.")
        if response == 55:  # one of the dev tools
            print("Great job! You escaped the escape room!")
            done = True
        if response == 9:
            if len(inventory) > 0:
                print(inventory)
            else:
                print("You have nothing useful on you right now.")


main()
